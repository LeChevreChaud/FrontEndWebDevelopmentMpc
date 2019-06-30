
export interface CategorySearch {
    category: string,
    subcategories: Array<SubcategorySearch>
}

export interface SubcategorySearch {
    name: string
}