export interface Category {
    category: string,
    subcategories: Array<Subcategory>,
}

export interface Subcategory {
    name: string,
    items: Array<Product>,
}

export interface Product {
    name: string,
    description: string,
    price: number,
    imagelink: string,
    rating: number,
    stock: number,
    category: string,
    subcategory: string
}
