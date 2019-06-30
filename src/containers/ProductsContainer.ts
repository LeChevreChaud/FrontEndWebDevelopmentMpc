import { connect } from 'react-redux';
import { fetchProductsBegin, fetchProductsSuccess, fetchCategories, sortBy, filterItem, showOnlyStock, filterPrice, removeSubategory, addCategory, addSubategory, clearFilter} from '../actions/productAction';
import ProductService from '../common/services.ts/ProductService';
import Shopping from '../components/Shopping';


const mapStateToProps = (state: any) => ({
    categories: state.ProductsReducer.categories,
    products : state.ProductsReducer.filteredProduct,
    loading: state.ProductsReducer.loading,
    error: state.ProductsReducer.error,
    selectedCategory : state.ProductsReducer.selectedCategory,
    selectedSubCategory : state.ProductsReducer.selectedSubCategory
});

const mapDispatchToProps = (dispatch: any) => ({

    loadData: async () => {
        dispatch(fetchProductsBegin());
        const products = await ProductService.getAllProducts();
        await dispatch(fetchProductsSuccess(products));
    },

    loadCategories:async () => {
        const categories = await ProductService.getAllCategories();
        await dispatch(fetchCategories(categories));
    },

    sortBy:(type:string) => {
        dispatch(sortBy(type));
        dispatch(filterItem());
    },

    showOnlyStock:(stocked:boolean)=>{
        dispatch(showOnlyStock(stocked));
        dispatch(filterItem());
    },

    addFilterCategory: (category?:string) =>{
        dispatch(addCategory(category));
        dispatch(filterItem());
    },

    addFilterSubcategory: (subcategory:string, category?:string)=>{
        dispatch(addSubategory(subcategory, category));
        dispatch(filterItem());
    },

    removeFilterSubategory: (subcategory:string) =>{
        dispatch(removeSubategory(subcategory));
        dispatch(filterItem());
    },

    filterPrice: (minPrice?:number, maxPrice?:number) =>{
        dispatch(filterPrice(minPrice, maxPrice));
        dispatch(filterItem());
    },

    clearFilter:()=>{
        dispatch(clearFilter());
        dispatch(filterItem());
    }
});

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Shopping);

export default ProductsContainer;
