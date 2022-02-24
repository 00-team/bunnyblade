const DATETIME = 'datetime INTEGER NOT NULL'
const TABLES_BASE = [
    {
        name: 'category',
        columns: ['title TEXT NOT NULL'],
    },
    {
        name: 'todo',
        columns: [
            'title TEXT NOT NULL',
            'category INTEGER REFERENCES category(id) ON DELETE SET NULL',
            'checked BOOLEAN NOT NULL DEFAULT 0',
            DATETIME,
            'description TEXT',
        ],
    },
    {
        name: 'picture',
        columns: [
            'todo INTEGER NOT NULL REFERENCES todo(id) ON DELETE CASCADE',
            DATETIME,
            'src TEXT NOT NULL',
            'caption TEXT',
        ],
    },
]

const GetColumns = (columns: string[]): string => {
    return `id INTEGER PRIMARY KEY AUTOINCREMENT, ${columns.join(', ')}`
}

const TABLES = TABLES_BASE.map(
    table =>
        `CREATE TABLE IF NOT EXISTS ${table.name} (${GetColumns(
            table.columns
        )})`
)

export { TABLES }
