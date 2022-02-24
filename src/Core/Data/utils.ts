// sqlite
import sqlite3 from 'sqlite3'
import { Database, open as open_db } from 'sqlite'

// tables
import { TABLES } from './tables'

// path
import { resolve } from 'path'

// debug only
sqlite3.verbose()

const GetDB = async () => {
    const db = await open_db({
        filename: resolve(__dirname, 'default.db'),
        driver: sqlite3.Database,
    })
    await db.exec('PRAGMA foreign_keys = ON;')
    return db
}

const InitDB = async () => {
    try {
        const db = await GetDB()
        TABLES.forEach(async table => await db.exec(table))
        await db.close()
    } catch (error) {
        console.log('Error while initializing the database ...')
    }
}

function isStr<A>(arg: A): A | string {
    if (typeof arg === 'string') return `"${arg}"`

    return arg
}

export { GetDB, InitDB, isStr }

const GetRowSetup = (table: string, db: Database) => {
    return async (id: number | 'last' | 'all') => {
        if (id === 'last')
            return await db.get(
                `SELECT * FROM "${table}" ORDER BY id DESC LIMIT 1`
            )

        if (id === 'all') return await db.all(`SELECT * FROM "${table}"`)

        return await db.get(`SELECT * FROM "${table}" WHERE id = ${id}`)
    }
}

import { SIGNALS, BASE_PROPS, ReturnType } from './models'

// get, delete, all
type HGDA = (props: BASE_PROPS) => Promise<unknown>
const HandleGDASetup = (table: string, db: Database) => {
    const GetRow = GetRowSetup(table, db)

    const HandleGDA: HGDA = async props => {
        switch (props.signal) {
            case SIGNALS.ALL:
                return GetRow('all')
            case SIGNALS.GET:
                return GetRow(props.id)
            case SIGNALS.DELETE:
                const row = await GetRow(props.id)
                await db.exec(`DELETE FROM "${table}" WHERE id = ${props.id}`)
                return row
            default:
                return null
        }
    }

    return HandleGDA
}

import { CategoryModel } from './models'

interface C_ADD {
    signal: SIGNALS.ADD
    title: string
}
interface C_UPDATE {
    signal: SIGNALS.UPDATE
    id: number
    title: string
}
export { C_ADD, C_UPDATE }

type C = (
    props: BASE_PROPS | C_ADD | C_UPDATE
) => Promise<ReturnType<CategoryModel>>
const Category: C = async props => {
    const db = await GetDB()
    const GetRow = GetRowSetup('category', db)
    const HandleGDA = HandleGDASetup('category', db)

    switch (props.signal) {
        case SIGNALS.ADD:
            await db.exec(
                `INSERT INTO "category" (title) VALUES ("${props.title}")`
            )
            return await GetRow('last')

        case SIGNALS.UPDATE:
            await db.exec(
                `UPDATE category SET title = "${props.title}" WHERE id = ${props.id}`
            )
            return await GetRow(props.id)

        default:
            return await HandleGDA(props)
    }
}

import { TodoModel } from './models'

interface T_ADD {
    signal: SIGNALS.ADD
    title: string
    category?: number
}
interface T_UPDATE {
    signal: SIGNALS.UPDATE
    id: number
    title?: string
    category?: number
    checked?: boolean
    description?: string
}

type T = (
    props: BASE_PROPS | T_ADD | T_UPDATE
) => Promise<ReturnType<TodoModel>>
const Todo: T = async props => {
    const db = await GetDB()
    const GetRow = GetRowSetup('todo', db)
    const HandleGDA = HandleGDASetup('todo', db)

    switch (props.signal) {
        case SIGNALS.ADD:
            const category = props.category || 'NULL'
            await db.exec(
                `INSERT INTO "todo"
                (title, category, datetime) VALUES
                ("${props.title}", ${category}, ${new Date().getTime()})`
            )
            return await GetRow('last')

        case SIGNALS.UPDATE:
            const values = [
                ['category', props.category],
                ['checked', props.checked],
                ['description', props.description],
                ['title', props.title],
            ]
                .filter(p => p[1] !== undefined)
                .map(p => `${p[0]} = ${isStr(p[1])}`)
                .join(', ')

            if (!values) return null

            await db.exec(`UPDATE todo SET ${values} WHERE id = ${props.id}`)

            return await GetRow(props.id)

        default:
            return await HandleGDA(props)
    }
}

export { Category, Todo }
