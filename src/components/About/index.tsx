import React from 'react';
import Banner from '../Banner';
import AboutCard from './aboutCard';
import './index.scss'
import { Row, Col, Button } from 'react-bootstrap';
import boxes from './../../images/boxes.jpg'
import drone from './../../images/drone.jpg'
import design from './../../images/design.jpg'
import sugar from './../../images/sugar.jpg'
import { RouteComponentProps, withRouter } from 'react-router';


/* *rubic63* 
About page */
class About extends React.Component<RouteComponentProps> {

  onClick=()=>{
    this.props.history.push('/contact');
  }

  render() {
    return (
      <div className="about-page">
        <Banner title={"ABOUT US"} subtitle={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} />
        <div className="card-container">
          <AboutCard title={"Super Fresh"} img={boxes} description={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
          <AboutCard title={"Quality"} img={drone} description={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
          <AboutCard title={"Design "} img={design} description={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
        </div>
        <div className="imgage-container-about">
          <img src={sugar} alt="" />
        </div>
        <Banner title={"ANY QUESTION ?"} subtitle={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} />
        <div className="btn-container-about">
          <Button variant="primary" size="lg" onClick={this.onClick}>
            Contact Us
          </Button>
        </div>

      </div>
    );
  }
}

export default withRouter(About);
