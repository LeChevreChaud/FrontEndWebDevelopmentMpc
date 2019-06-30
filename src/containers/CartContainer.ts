import { connect } from 'react-redux';
import { Product } from '../common/models/Product';
import Cart from '../components/Cart';
import { removeProductFromCart, addProductToCart, clearCart } from '../actions/productAction';


const mapStateToProps = (state: any) => ({
    productsInCart : state.ProductsReducer.productsInCart
});

const mapDispatchToProps = (dispatch: any) => ({
    
    addProductToCart:(product:Product, quantity:number) => {
        dispatch(addProductToCart(product, quantity))
    },
    removeProductFromCart:(product:Product) => {
        dispatch(removeProductFromCart(product))
    },
    clearCart:()=>{
        dispatch(clearCart())
    }
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
