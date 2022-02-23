interface CategoryModel {
    id: number
    title: string
}

type CategoryReturn = Promise<CategoryModel | CategoryModel[] | null>
interface Category {
    add: (title: string) => CategoryReturn
    get: (id: number) => CategoryReturn
    delete: (id: number) => CategoryReturn
    all: () => CategoryReturn
    update: (id: number, title: string) => CategoryReturn
}

declare var category: Category
