import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { DEBUG } from '../../config/main'
import { DATABASE } from '../../config/path'
import { TABLES } from '../config'

if (DEBUG) sqlite3.verbose()

const GetDB = async () => {
    return await open({
        filename: DATABASE,
        driver: sqlite3.Database,
    })
}

const InitDB = async () => {
    try {
        let db = await GetDB()
        await db.exec('PRAGMA foreign_keys = ON;')
        TABLES.forEach(async table => await db.exec(table))
        db.close()
    } catch (error) {
        console.log(error)
    }
}

export { GetDB, InitDB }

enum SIGNALS {
    ADD = 'ADD',
    GET = 'GET',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    ALL = 'ALL',
}

interface SIGNAL_GET_DELETE {
    signal: SIGNALS.GET | SIGNALS.DELETE
    id: number
}

interface SIGNAL_ALL {
    signal: SIGNALS.ALL
}

type BASE_PROPS = SIGNAL_GET_DELETE | SIGNAL_ALL
export { SIGNALS, BASE_PROPS, SIGNAL_ALL, SIGNAL_GET_DELETE }
