import React from 'react';
import './index.scss'
import { Modal, Button } from 'react-bootstrap';

interface IModalProps {
  show:boolean
  handleClose:()=>void
  handleValidate:()=>void
}

class ConfirmationModal extends React.Component<IModalProps> {
  /* /* *rubic51*   
  Alert when click on the checkout button */
  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Confirmation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to validate this order?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={this.props.handleValidate}>
                Validate
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
}


export default ConfirmationModal;
