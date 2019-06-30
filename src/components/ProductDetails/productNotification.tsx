import React from 'react';
import { Product } from '../../common/models/Product';
import Toast from 'react-bootstrap/Toast'
import './index.scss'

interface NotificationProps {
  product : Product
  handleClose:()=>any
  show:boolean
  error:boolean
}

class ProductNotification extends React.Component<NotificationProps> {

  render() {
    return (
        <Toast onClose={this.props.handleClose} show={this.props.show} delay={3000} autohide transition={false} className="notification-product">
        <Toast.Header>
          <strong className="mr-auto">Adding Product</strong>
          <small>Less than a minute ago</small>
        </Toast.Header>
        <Toast.Body>
          {!this.props.error && <span>The product has been added to the cart.</span>}
          {this.props.error && <span>The product has not been added to the cart.</span>}
        </Toast.Body>
      </Toast>
    );
  }
}


export default ProductNotification;
