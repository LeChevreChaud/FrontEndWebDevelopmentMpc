import { connect } from 'react-redux';
import {getProductDetails, addProductToCart, removeProductFromCart } from '../actions/productAction';
import ProductService from '../common/services.ts/ProductService';
import ProductDetails from '../components/ProductDetails';
import { Product } from '../common/models/Product';


const mapStateToProps = (state:any) => ({
    product : state.ProductsReducer.productDetails
});

const mapDispatchToProps = (dispatch:any) => ({

    loadDetails : async (name:string) => {
        const product = await ProductService.getProductByName(name);
        await dispatch(getProductDetails(product));
    },
    addProductToCart:(product:Product, quantity:number) => {
        dispatch(addProductToCart(product, quantity))
    },

    removeProductFromCart:(product:Product) => {
        dispatch(removeProductFromCart(product))
    }
});

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;
