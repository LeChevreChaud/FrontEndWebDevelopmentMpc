import React, { Fragment } from 'react';
import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import "./index.scss"

class HeaderMenu extends React.Component<RouteComponentProps> {

  onClick = () => {
    this.props.history.push('/cart')
  }

  render() {
    return (
     /* *rubic68* */
     /* Header bar always at the top of the page */
      <Fragment>
        <Navbar expand="lg" className="nav-bar-header">
          <Navbar.Brand><Link to="/">WorldWideImporters</Link></Navbar.Brand>
          {/* *rubic67*  *rubic71*/
          /* Link to the cart page */}
          <Button className="cart-button" onClick={this.onClick}><i className="fas fa-shopping-cart"></i></Button>
        </Navbar>
        <Navbar expand="lg" sticky="top" className="nav-bar-menu">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {/* *rubic65* *rubic69* */
                /* Link to the home page */}
                <Link to="/" className="nav-item-custom">HOME</Link>
                {/* *rubic66* *rubic70*/
                /* Link to the shopping page */}
                <Link to="/shopping" className="nav-item-custom">SHOPPING</Link>
                <Link to="/about" className="nav-item-custom">ABOUT</Link>
                <Link to="/contact" className="nav-item-custom">CONTACT</Link>        
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>

    );
  }
}

export default withRouter(HeaderMenu);




