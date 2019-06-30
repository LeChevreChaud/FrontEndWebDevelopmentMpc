import {
  FETCH_CAROUSEL_PRODUCTS_BEGIN,
  FETCH_CAROUSEL_PRODUCTS_SUCCESS,
  FETCH_CAROUSEL_PRODUCTS_FAILURE
} from '../constants/actionTypes';
import { Subcategory } from '../common/models/Product';

const initialState = {
  loading: false,
  carouselProducts : [] as Array<Subcategory>,
  error: null
};

const HomeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    
    case FETCH_CAROUSEL_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CAROUSEL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        carouselProducts : action.payload.subcategories
      };

    case FETCH_CAROUSEL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        carouselProducts: []
      };
    default:
      return state;
  }
};

export default HomeReducer;
