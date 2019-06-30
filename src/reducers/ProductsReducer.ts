import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  GET_PRODUCT_DETAILS,
  FETCH_CATEGORIES,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  SORT_BY,
  FILTER_ITEMS,
  SHOW_ONLY_STOCK,
  FILTER_PRICE,
  REMOVE_FILTER_SUBCATEGORY,
  ADD_FILTER_CATEGORY,
  ADD_FILTER_SUBCATEGORY,
  CLEAR_FILTER
} from '../constants/actionTypes';
import { Product } from '../common/models/Product';
import { CategorySearch } from '../common/models/SearchProduct';
import { comparePrice, compareAlpha, compareRating } from '../utils/Helper';
import { sortBy } from '../actions/productAction';

const initialState = {
  loading: false,
  productDetails: {} as Product,
  categories: [] as Array<CategorySearch>,
  products: [] as Array<Product>,
  filteredProduct: [] as Array<Product>,
  productsInCart: [] as Array<Product>,
  error: null,
  selectedCategory: "" as string,
  selectedSubCategory: [] as Array<string>,
  displayOnlyStock: false as boolean,
  sortBy: "none" as string,
  minPrice: null,
  maxPrice: null
};

const ProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        selectedCategory: "",
        selectedSubCategory: [] as Array<string>,
        filteredProduct: action.payload.products
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        products: [],
        filteredProduct: []
      };

    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories
      };

    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload.product
      };

    case ADD_PRODUCT_TO_CART:

        /* *rubic44* 
    Add the specified quantity to the cart */

    /* *rubic53* *rubic55*
    update the cart */

      if (action.payload.quantity < 1) return

      let productsToAdd = [] as Array<Product>;
      for (var index = 0; index < action.payload.quantity; index++) {
        productsToAdd = [...productsToAdd, action.payload.product]
      }

      return {
        ...state,
        productsInCart: [...state.productsInCart, ...productsToAdd]
      };

    case REMOVE_PRODUCT_FROM_CART:
        /* *rubic53* *rubic54* *rubic55*
    update the cart */
      return {
        ...state,
        productsInCart: state.productsInCart.filter(x => x.name !== action.payload.product.name)
      };

    case CLEAR_CART:
      return {
        ...state,
        productsInCart: []
      };

    case SORT_BY:
      /* *rubic34*
          Sort products
      */
      return {
        ...state,
        sortBy: action.payload.type
      };

    case FILTER_PRICE:
      return {
        ...state,
        minPrice: action.payload.minPrice ? action.payload.minPrice : state.minPrice,
        maxPrice: action.payload.maxPrice ? action.payload.maxPrice : state.maxPrice

      };

    case FILTER_ITEMS:

        /* *rubic28* 
        Results is updated when filters are selected 
        */

      let results = [...state.products];

      if (state.selectedCategory) { results = results.filter(x => x.category === state.selectedCategory) }
      if (state.selectedSubCategory && state.selectedSubCategory.length > 0) { results = results.filter(x => state.selectedSubCategory.includes(x.subcategory)) }
      if (state.displayOnlyStock) { results = results.filter(x => x.stock > 0) }
      if (state.minPrice) { results = results.filter(x => x.price >= state.minPrice!) }
      if (state.maxPrice) { results = results.filter(x => x.price <= state.maxPrice!) }

      /* *rubic34*
        Sort products
      */
      if (state.sortBy) {
        switch (state.sortBy) {
          case 'alphabetical':
            results = [...results.sort((a, b) => compareAlpha(a.name, b.name))]
            break;
          case 'rating':
            results = [...results.sort((a, b) => compareRating(b.rating, a.rating))]
            break;
          case 'lowHightPrice':
            results = [...results.sort((a, b) => comparePrice(a, b, true))]
            break;
          case 'hightLowPrice':
            results = [...results.sort((a, b) => comparePrice(a, b, false))]
            break;
        }
      }

      return {
        ...state,
        filteredProduct: results
      };

    case SHOW_ONLY_STOCK:

      /* *rubic29* 
      Filter in stock only item
      */
      const stocked = action.payload.stocked ? true : false;

      return {
        ...state,
        displayOnlyStock: stocked
      };

    case ADD_FILTER_CATEGORY:
      const categoriesList = state.categories.find(x => x.category === action.payload.category);
      return {
        ...state,
        selectedCategory: action.payload.category,
        selectedSubCategory: categoriesList ? categoriesList.subcategories.map(x => x.name) : []
      };

    case REMOVE_FILTER_SUBCATEGORY:
      const resultSubCateg = state.selectedSubCategory.filter(x => x !== action.payload.subcategory)

      return {
        ...state,
        selectedCategory: resultSubCateg.length > 0 ? state.selectedCategory : "",
        selectedSubCategory: resultSubCateg
      };

    case ADD_FILTER_SUBCATEGORY:
        /* *rubic27* 
        Clicking on a other subcategory will change the category related 
        */
      let newSubcategories = [] as Array<string>;
      if (action.payload.category == state.selectedCategory) {
        newSubcategories = [...state.selectedSubCategory, action.payload.subcategory];
      } else {
        newSubcategories = [...newSubcategories, action.payload.subcategory];
      }
      return {
        ...state,
        selectedSubCategory: newSubcategories,
        selectedCategory: action.payload.category ? action.payload.category : state.selectedCategory
      };

      case CLEAR_FILTER:

      return {
        ...state,
        selectedSubCategory: [],
        selectedCategory: "",
        displayOnlyStock:false,
        minPrice:1,
        maxPrice:null,
        sortBy:'none'

      };


    default:
      return state;
  }
};

export default ProductsReducer;
