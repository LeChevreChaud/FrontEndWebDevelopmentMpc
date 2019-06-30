import React from 'react';
import { Form, Card, Button, Row, Col } from 'react-bootstrap';
import './index.scss'

interface IFilterProps {
    sortBy: (type: string) => any
    showOnlyStock: (stocked: boolean) => any
    filterPrice: (minPrice?: number, maxPrice?: number) => any
    clearFilter:()=>any
}

class Filter extends React.Component<IFilterProps> {

    /* *rubic34*
        Sort products
    */
    selectSortFilter = (evt: any) => {
        this.props.sortBy(evt.target.value)
    }

    /* *rubic29* 
    Filter in stock only item
    */
    displayOnlyCheck = (evt: any) => {
        this.props.showOnlyStock(evt.target.checked);
    }

    selectPriceMin = (evt: any) => {
        this.props.filterPrice(evt.target.value, undefined)
    }


    selectPriceMax = (evt: any) => {
        this.props.filterPrice(undefined, evt.target.value)
    }

    render() {
        return (
            // *rubic14*
            // Controls bar with selected filters
            <Card className="shopping-filter">
                <Card.Header as="h5">Filter</Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={6}>
                            <Form.Label>Sorted by :</Form.Label>
                            {/* *rubic18*
                            dropdown list*/}
                            <Form.Control as="select" onChange={this.selectSortFilter}>
                                <option value={"alphabetical"}>Alphabetical</option>
                                <option value={"rating"}>Rating</option>
                                <option value={"lowHightPrice"}>Price : from low to hight</option>
                                <option value={"hightLowPrice"}>Price : from hight to low</option>
                                <option value={"none"} selected>None</option>
                            </Form.Control>
                            {/* *rubic17*
                            toggle switch*/}
                            <Form.Check onChange={(e: any) => this.displayOnlyCheck(e)} type="checkbox" label="In Stock Only" className="display-stocked-product"/>
                        </Col>
                        <Col lg={6}>   
                            <Form.Label>Min price : </Form.Label>
                            <Form.Control className="shopping-filter-input" type="number" defaultValue="1" min={1} onBlur={(e: any) => this.selectPriceMin(e)} />
                            <Form.Label>Max price : </Form.Label>
                            <Form.Control className="shopping-filter-input" type="number" max={9999} min={1} onBlur={(e: any) => this.selectPriceMax(e)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Button variant="primary" onClick={this.props.clearFilter}>Clear filter</Button>
                        </Col>
                    </Row>                 
                </Card.Body>
            </Card>
        );
    }
}

export default Filter;

