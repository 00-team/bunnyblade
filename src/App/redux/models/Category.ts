interface CategoryModel {
    id: number
    title: string
}

export { CategoryModel }

enum CategoryTypes {
    SET_CATEGORIES = 'SET_CATEGORIES',
    UPDATE_CATEGORY = 'UPDATE_CATEGORY',
}

type State = CategoryModel[]

export { CategoryTypes, State }
