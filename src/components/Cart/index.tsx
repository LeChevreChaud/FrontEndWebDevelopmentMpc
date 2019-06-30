import React from 'react';
import { Product } from '../../common/models/Product';
import ProductCard from './ProductCard';
import { groupBy } from '../../utils/Helper';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './index.scss'
import SubTotalCard from './SubTotalCard';
import SummaryCard from './SummaryCard';
import Banner from '../Banner';
import ConfirmationModal from './confirmationModal';
import { withRouter, RouteComponentProps } from 'react-router';

interface ICartProps {
  productsInCart: Array<Product>
  addProductToCart: (product: Product, quantity: number) => void
  removeProductFromCart: (product: Product) => void
  clearCart: () => void
}

interface ICartState{
  show:boolean
}

class Cart extends React.Component<ICartProps & RouteComponentProps, ICartState> {

  constructor(props:any) {
    super(props);

    this.state = {
      show: false
    }
  }

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  validate=()=>{
    this.props.clearCart();
    this.handleClose();
    this.props.history.push("/");
  }

  getProductGroupedByName = (): Array<Array<Product>> => {
    const results = groupBy(this.props.productsInCart, "name")
    return Object.keys(results).map((k) => results[k]);
  }

  add = (a: number, b: number) => {
    return a + b
  }


  getSubTotal = () => {
    const prices = this.props.productsInCart.map(x => x.price);
    return prices.reduce(this.add)
  }

  renderEmptyProductCard = () => {
    return (
      <Card >
        <Card.Body>
          <Row>
            <Col lg={6}>
              {"Your cart is empty ! "}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }


  render() {
    const results = this.getProductGroupedByName();
    const sub = this.props.productsInCart.length > 0 ? this.getSubTotal() : 0;
    return (
      <Container fluid={true} >
      <ConfirmationModal show={this.state.show} handleClose={this.handleClose} handleValidate={this.validate}/>
        <Row>
          <Col lg={12}>
            <Banner title={"YOUR CART"} subtitle={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="cart-col">
          {/* /* *rubic47* 
          Details page with selected products */}
            <Row>
              <Col lg={12}>
                {results.length < 1 ? this.renderEmptyProductCard() : results.map(x => <ProductCard product={x[0]} quantity={x.length} removeProductFromCart={this.props.removeProductFromCart} />)}
              </Col>
            </Row>
            <Row>
              <Col lg={{ offset: 8, span: 4 }}>
                <SubTotalCard subTotal={sub} />
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="cart-col">
            <Row>
              <Col lg={12}>
                {/* /* *rubic49* 
                 Summary cart */}
                <SummaryCard subTotal={sub} shipping={5} tax={21} validate={this.handleShow}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default withRouter(Cart);
