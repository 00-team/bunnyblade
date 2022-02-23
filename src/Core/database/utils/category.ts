import { GetDB, SIGNALS, BASE_PROPS } from './main'

interface CategoryModel {
    id: number
    title: string
}
interface SIGNAL_ADD {
    signal: SIGNALS.ADD
    title: string
}

interface SIGNAL_UPDATE {
    signal: SIGNALS.UPDATE
    id: number
    title: string
}

type CProps = BASE_PROPS | SIGNAL_ADD | SIGNAL_UPDATE
type C = (props: CProps) => Promise<CategoryModel | CategoryModel[] | null>

const Category: C = async props => {
    try {
        const db = await GetDB()

        const Get = async (id: number | 'last' | 'all') => {
            if (id === 'last')
                return await db.get(
                    'SELECT * FROM category ORDER BY id DESC LIMIT 1'
                )
            else if (id === 'all') return await db.all('SELECT * FROM category')
            else return await db.get(`SELECT * FROM category WHERE id = ${id}`)
        }

        switch (props.signal) {
            case SIGNALS.GET:
                return await Get(props.id)

            case SIGNALS.ADD:
                await db.exec(
                    `INSERT INTO category (title) VALUES ("${props.title}")`
                )
                return await Get('last')

            case SIGNALS.ALL:
                return await Get('all')

            case SIGNALS.DELETE:
                let category = await Get(props.id)
                await db.exec(`DELETE FROM category WHERE id = ${props.id}`)
                return category

            case SIGNALS.UPDATE:
                await db.exec(
                    `UPDATE category SET title = "${props.title}" WHERE id = ${props.id}`
                )
                return await Get(props.id)
        }
    } catch (error) {
        console.log('category db error: ', error)
    }

    return null
}

export { Category }
