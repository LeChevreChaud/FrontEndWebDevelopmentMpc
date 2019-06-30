import React, { Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Product } from '../../common/models/Product';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './index.scss'
import ProductNotification from './productNotification';
import ErrorModal from './errorModal';

interface Props extends RouteComponentProps<{ name: string }> { };

interface IProductDetailsProps {
  loadDetails: (name: string) => any
  product: Product
  addProductToCart: (product: Product, quantity: number) => void
  removeProductFromCart: (product: Product) => void
}

interface IProductStateProps {
  quantity: number
  show: boolean
  error:boolean
  showModal:boolean
}

class ProductDetails extends React.Component<Props & IProductDetailsProps, IProductStateProps> {

  constructor(props: any) {
    super(props);

    this.state = {
      quantity: 0,
      show: false,
      error:false,
      showModal:false
    }
  }

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  handleShowModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  componentDidMount() {
    if (this.props.match.params.name) {
      this.props.loadDetails(this.props.match.params.name);
    }
  }

    /* *rubic30* 
        Button will add item to the shopping cart
    */

    /* *rubic44* 
    Add the specified quantity to the cart */
  addProduct = (product: Product) => {
    if (product.stock > 0) {
      const qt = this.state.quantity ? this.state.quantity : 1;
      this.props.addProductToCart(product, qt);
    } else {
      this.setState({ error: true });
      this.handleShowModal();
    }
    this.handleShow();
  }

  selectQuantity = (evt: any) => {
    this.setState({
      quantity: evt.target.value
    });
  }

      /* *rubic45* 
    Go back on the last visited page */
  returnToShopping = () => {
    this.props.history.goBack();
  }



  render() {
    const { product } = this.props;
    return (
      <Fragment>
        <ErrorModal handleClose={this.handleCloseModal} show={this.state.showModal}/>
        <Container fluid={true} className="product-details-container">
          <Row>
            <Col lg={{ span: 4, offset: 1 }}>
              <div className="product-details-img">
                {/* *rubic36* 
                Image of the selected product */}
                <img src={product.imagelink} alt={product.name} />
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 1 }}>
              <Row>
                <Col lg={12} className="product-details-row">
                {/* *rubic35* 
                Name of the selected product */}
                  <h3>{product && product.name}</h3>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="rating">
                  {/* *rubic37* 
                  Rating of the selected product */}
                    <StarRatingComponent
                      name={product.name}
                      value={product.rating}
                      starCount={5}
                      editing={false}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="product-details-row">
                  {/* *rubic37* 
                  Price of the selected product */}
                  <span>{product && product.price + " "}<i className="fas fa-euro-sign"></i></span>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="product-details-row">
                   {/* *rubic38* 
                  Items in stock for the selected product */}
                  <p>Items in stock : <span className="stock-number">{product && product.stock}</span></p>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="product-details-row">
                   {/* *rubic37* 
                  Descriptio of the selected product */}
                  <p>{product && product.description}</p>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="product-details-row">
                  {/* *rubic42* 
                  Button Qty */}
                  <Form.Label className="product-details-label">Qty : </Form.Label>
                </Col>
                <Col lg={2} className="product-details-row">
                  <Form.Control type="number" placeholder="1" min={1} onChange={(e: any) => this.selectQuantity(e)} />
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="product-details-row product-details-button">
                  {/* *rubic41* 
                  Add button */}
                  <Button variant="secondary" onClick={() => this.addProduct(product)} className="product-details-button-item">Add</Button>
                   {/* *rubic42* 
                  Back button */}
                  <Button variant="primary" onClick={() => this.returnToShopping()} className="product-details-button-item">back</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ProductNotification product={this.props.product} handleClose={this.handleClose} show={this.state.show} error={this.state.error}/>
      </Fragment>
    );
  }
}


export default withRouter(ProductDetails);
