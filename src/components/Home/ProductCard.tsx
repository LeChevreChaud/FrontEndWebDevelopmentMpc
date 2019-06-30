import React from 'react';
import './index.scss';
import { Card, Button } from 'react-bootstrap';
import { Product } from '../../common/models/Product';
import { withRouter, RouteComponentProps } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

interface IProductCardProps {
    product: Product
}

class ProductCard extends React.Component<IProductCardProps & RouteComponentProps> {

    seeProduct = () => {
        this.props.history.push("/shopping/"+this.props.product.name)
    }

    render() {
        const {product} = this.props;
        return (
            <Card className="product-Card">
                <Card.Body>
                    <div className="product-Card-img">
                        <img alt={product.description} src={product.imagelink} />                  
                    </div>
                    <div className="product-Card-content">
                        <Card.Title>{product.name}</Card.Title>
                        <StarRatingComponent
                                name={product.name}
                                value={product.rating}
                                starCount={5}
                                editing={false}
                            />
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                    </div>
                    <div className="product-Card-btn">
                        <Button variant="primary" onClick={this.seeProduct}>Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default withRouter(ProductCard);
