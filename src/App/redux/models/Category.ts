interface CategoryModel {
    id: number
    title: string
}

interface SelectCategoryModel {
    active: boolean
    categories: number[]
}

export { CategoryModel, SelectCategoryModel }

enum CategoryTypes {
    SET_CATEGORIES = 'SET_CATEGORIES',
    TOGGLE_SELECT = 'TOGGLE_SELECT_CATEGORY',
    TOGGLE_SELECTED = 'TOGGLE_SELECTED_CATEGORY',
}

type State = CategoryModel[]

const DefaultSState: SelectCategoryModel = {
    active: false,
    categories: [],
}

export { CategoryTypes, State, DefaultSState }
