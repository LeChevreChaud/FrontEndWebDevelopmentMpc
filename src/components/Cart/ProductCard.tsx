import React from 'react';
import { Product } from '../../common/models/Product';
import { Button, Card, Row, Col } from 'react-bootstrap';

interface IproductCardProps {
  product: Product,
  removeProductFromCart: (product: Product) => void
  quantity: number
}


class ProductCard extends React.Component<IproductCardProps> {
  render() {
    const { product, quantity } = this.props;
    return (

      <Card>
        <Card.Body>
          <Row>
            <Col lg={3}>
              {product.name}
            </Col>
            <Col lg={3}>
              {product.description}
            </Col>
            <Col lg={1}>
              {product.price + " "}<i className="fas fa-euro-sign"></i>
            </Col>
            <Col lg={1}>
              {quantity}
            </Col>
            <Col lg={2}>
              {quantity * product.price + " "}<i className="fas fa-euro-sign"></i>
            </Col>
            <Col lg={1}>
            { /* *rubic53* *rubic54* *rubic55*   
            remove this item of the chart and update the summary */}
              <Button onClick={() => this.props.removeProductFromCart(product)}>Remove</Button>
            </Col>
          </Row>
          
        </Card.Body>
      </Card>

    );
  }
}


export default ProductCard;
