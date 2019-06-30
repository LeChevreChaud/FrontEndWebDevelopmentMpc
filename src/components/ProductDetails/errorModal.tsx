import React from 'react';
import { Product } from '../../common/models/Product';
import './index.scss'
import { Modal, Button } from 'react-bootstrap';

interface IModalProps {
  show:boolean
  handleClose:()=>void
}

class ErrorModal extends React.Component<IModalProps> {

  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Error
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Sorry ! This item is no longer in stock...</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleClose}>
                Ok
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
}


export default ErrorModal;
