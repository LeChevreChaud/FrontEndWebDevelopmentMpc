import React from 'react';
import { Product } from '../../common/models/Product';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Card, Row, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

interface IProductProps {
    productItem: Product
}

class ProductItem extends React.Component<RouteComponentProps & IProductProps> {

    /* *rubic31*  *rubic32*
        The user will be redirected to the product page
    */
    onClick = (name: string) => {
        this.props.history.push("/shopping/" + name)
    }
    render() {
        const { productItem } = this.props;
        return (
            <Card className="product-item">
                <Card.Body>
                    <Row>
                        <Col lg={12} className="img-card">
                            {/* *rubic23*
                            Image of the selected product */}
                            <img src={productItem.imagelink} alt={productItem.description} onClick={() => this.onClick(productItem.name)}/>
                        </Col>
                    </Row> 
                    <Row>
                        <Col lg={12} className="body-card">
                            {/* *rubic21*
                            Name of the selected product */}
                            <h4 onClick={() => this.onClick(productItem.name)}>{productItem && productItem.name}</h4>
 
                            <StarRatingComponent
                                name={productItem.name}
                                value={productItem.rating}
                                starCount={5}
                                editing={false}
                            />
                            {/* *rubic22*
                            Price of the selected product */}
                            <p>{productItem && productItem.price + " "}<i className="fas fa-euro-sign"></i></p>
                        </Col>
                    </Row>   
                    <Row>
                        <Col lg={12} className="btn-card-item">
                            {/* *rubic24*
                            Button Add to add the selected product to the cart */}
                            <Button variant="primary" onClick={() => this.onClick(productItem.name)}>Add to cart</Button>
                        </Col>
                    </Row>               
                </Card.Body>
            </Card>
        );
    }
}

export default withRouter(ProductItem);

