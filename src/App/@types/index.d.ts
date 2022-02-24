interface WinType {
    close: () => void
    minimize: () => void
}

type C = (
    props: BASE_PROPS | C_ADD | C_UPDATE
) => Promise<ReturnType<CategoryModel>>

type T = (
    props: BASE_PROPS | T_ADD | T_UPDATE
) => Promise<ReturnType<TodoModel>>

interface Database {
    Category: C
    Todo: T
}

declare var win: WinType
declare var database: Database
