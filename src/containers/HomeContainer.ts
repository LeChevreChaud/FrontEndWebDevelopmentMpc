import { connect } from 'react-redux';
import Home from '../components/Home';
import {fetchCarouselProductsBegin, fetchCarouselProductsSuccess } from '../actions/productAction';
import ProductService from '../common/services.ts/ProductService';


const mapStateToProps = (state:any) => ({
    loading : state.HomeReducer.loading,
    error: state.HomeReducer.error,
    carouselProducts : state.HomeReducer.carouselProducts
});

const mapDispatchToProps = (dispatch:any) => ({

loadCarousel : async () => {
        dispatch(fetchCarouselProductsBegin());
        const subcategories = await ProductService.getCarouselProducts();
        dispatch(fetchCarouselProductsSuccess(subcategories));
    }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
