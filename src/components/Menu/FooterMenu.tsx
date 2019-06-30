import React from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './index.scss'
import { Link } from 'react-router-dom';

class FooterMenu extends React.Component {

  render() {
    return (
      // *rubic72*
      // Footer always at the bottom of the page
        <div className="nav-bar-footer">
        <Container fluid>
          <Row>
          <Col lg={4}>
              <div className="mail-footer">info.superwebiste@mmp.com</div>  
            </Col>
            <Col lg={4}>
            <div className="nav-footer">
             {/* *rubic73**rubic76*
              Link to the home page */}
            <Link to="/" className="nav-item-custom">Home</Link>
              {/* *rubic74* *rubic77*
              Link to the about page */}
              <Link to="/about" className="nav-item-custom">About</Link>
              {/* *rubic75* *rubic78*
              Link to the contact page */}
              <Link to="/contact" className="nav-item-custom">Contact</Link>  
            </div>
            </Col>
            <Col lg={4}>
              <div className="copyright">© 2019 De Lucrezia Anthony</div>  
            </Col>
          </Row>      
        </Container>
        </div>
    );
  }
}

export default FooterMenu;




