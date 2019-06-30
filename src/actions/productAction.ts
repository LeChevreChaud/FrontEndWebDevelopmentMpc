import {
  GET_PRODUCT_DETAILS,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_CAROUSEL_PRODUCTS_BEGIN,
  FETCH_CAROUSEL_PRODUCTS_SUCCESS,
  FETCH_CAROUSEL_PRODUCTS_FAILURE,
  FETCH_CATEGORIES,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  SORT_BY,
  FILTER_ITEMS,
  SHOW_ONLY_STOCK,
  ADD_FILTER_CATEGORY,
  FILTER_PRICE,
  REMOVE_FILTER_SUBCATEGORY,
  ADD_FILTER_SUBCATEGORY,
  CLEAR_FILTER
} from "../constants/actionTypes";

import { Product, Subcategory } from "../common/models/Product";
import { CategorySearch } from "../common/models/SearchProduct";


export const fetchCarouselProductsBegin = () => ({
  type: FETCH_CAROUSEL_PRODUCTS_BEGIN
});

export const fetchCarouselProductsSuccess = (subcategories: Array<Subcategory>) => ({
  type: FETCH_CAROUSEL_PRODUCTS_SUCCESS,
  payload: { subcategories }
});

export const fetchCarouselProductsFailure = (error: any) => ({
  type: FETCH_CAROUSEL_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products: Array<Product>) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = (error: any) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchCategories = (categories : Array<CategorySearch>) => ({
  type: FETCH_CATEGORIES,
  payload: { categories }
});

export const getProductDetails = (product:Product) => ({
  type: GET_PRODUCT_DETAILS,
  payload: { product }
});

export const addProductToCart = (product:Product, quantity:number) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { product, quantity }
});

export const removeProductFromCart = (product:Product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: { product }
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const sortBy = (type:string) => ({
  type: SORT_BY,
  payload : { type }
});

export const addCategory= (category? : string) => ({
  type: ADD_FILTER_CATEGORY,
  payload : { category}
});

export const removeSubategory = (subcategory : string) => ({
  type: REMOVE_FILTER_SUBCATEGORY,
  payload : {subcategory}
});

export const addSubategory = (subcategory : string, category? :string) => ({
  type: ADD_FILTER_SUBCATEGORY,
  payload : {subcategory, category}
});

export const filterItem = () => ({
  type: FILTER_ITEMS,
});

export const showOnlyStock = (stocked:boolean) => ({
  type: SHOW_ONLY_STOCK,
  payload : { stocked}
});

export const filterPrice = (minPrice?:number, maxPrice?:number) => ({
  type: FILTER_PRICE,
  payload : { minPrice, maxPrice}
});

export const clearFilter = () => ({
  type: CLEAR_FILTER
});