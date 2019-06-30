import React from 'react';
import './index.scss'
import { Modal, Button } from 'react-bootstrap';

interface IModalProps {
  show:boolean
  handleClose:()=>void
}

class ConfirmationModalMsg extends React.Component<IModalProps> {

  render() {
    return (
        /* *rubic60* 
        Alert based on the message sent */
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been sent</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleClose}>
                Ok
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
}


export default ConfirmationModalMsg;
