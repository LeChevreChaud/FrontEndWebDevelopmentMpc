import React from 'react';
import Banner from '../Banner';
import { Button, Card } from 'react-bootstrap';

interface IAboutCardgProps {
    title:string
    description:string
    img:any
  }
  

class AboutCard extends React.Component<IAboutCardgProps> {
    render() {
        return (
            <Card className="about-card">
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default AboutCard;
