interface CategoryModel {
    id: number
    title: string
}

enum CategoryTypes {
    SET_CATEGORIES = 'SET_CATEGORIES',
}

type State = CategoryModel[]

export { CategoryTypes, State, CategoryModel }
