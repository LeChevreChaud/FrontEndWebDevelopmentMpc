import { combineReducers } from "redux";
import HomeReducer from "./reducers/HomeReducer";
import ProductsReducer from "./reducers/ProductsReducer";

const reducer = combineReducers({
    HomeReducer,
    ProductsReducer
} as any);

export default reducer;


