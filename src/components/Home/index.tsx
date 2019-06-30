import React from 'react';
import CustomCarousel from './CustomCarousel';
import './index.scss';
import {Subcategory } from '../../common/models/Product';
import Banner from '../Banner';
import { Button } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';
import imgBanner from './../../images/pinappel.png';

interface IHomeProps {
    loadCarousel : () => any,
    carouselProducts : Array<Subcategory>
    loading: boolean,
    error: any
}

class Home extends React.Component<IHomeProps & RouteComponentProps> {

    componentWillMount = () => {
        this.props.loadCarousel();
    }

    // *rubic12*
    // redirect user to the shopping page
    onClick = () =>{
        this.props.history.push('/shopping');
    }

    render() {
        return (
            <div className="home-page-container">
                <div style={{backgroundImage:`url(${imgBanner})`}} className="banner-image">
                    {/* *rubic04* */}
                    {/* Reusable component. Here use to display welcome text */}
                   <Banner title={"WELCOME"} subtitle={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} />
                </div>
                <Banner title={"OUR LATEST PRODUCTS"} subtitle={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} />
                <CustomCarousel subcategories={this.props.carouselProducts}/>
                <div className="see-product-button">
                    {/* *rubic05* */}
                    {/* Button shop all */}
                    <Button variant="secondary" size="lg" onClick={this.onClick}>
                        Shop All
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);

