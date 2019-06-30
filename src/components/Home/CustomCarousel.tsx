import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Subcategory } from '../../common/models/Product';
import { getRandomNumber } from '../../utils/Helper';
import ProductCard from './ProductCard';

interface ICarouselProps {
    subcategories: Array<Subcategory>
}

// *rubic01*
// component with the product carousel

class CustomCarousel extends React.Component<ICarouselProps> {

    renderCarouselCard= (subcategory : Subcategory) => {
        //number of images on the slide = 4 but responsive. 
        //Number of images will changes with screen size.
        return subcategory.items.slice(0,4).map(x => 
            <ProductCard product={x}/>
        )

    }

    renderPrevIcon = () => {
        return(
            //*rubic02*
            //left arrow key 

            //*rubic08*
            //Carousel will move one slide back.
            <span aria-hidden="true" className="fas fa-chevron-left carousel-action-icon"></span>
        );
    }

    renderNextIcon = () => {
        //*rubic03*
        //right arrow key 

        //*rubic07*
        //Carousel will move one slide forward.
        
        return(
            <span aria-hidden="true" className="fas fa-chevron-right carousel-action-icon"></span>
        );
    }

    //  *rubic06* 
    //  Toggle button already include in the react bootstrap component 
    render() {
        return (
            <div className="custom-carousel-container">
                {/* *rubic11* */}
                {/* *animation include in the boostrap carousel component* */}
                <Carousel prevIcon={this.renderPrevIcon()} nextIcon={this.renderNextIcon()}>
                    {this.props.subcategories.map(sub => 
                        sub.items.length > 0 &&
                        <Carousel.Item>
                            <div className="carousel-slide">
                                {this.renderCarouselCard(sub)}
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        );
    }
}

export default CustomCarousel;

