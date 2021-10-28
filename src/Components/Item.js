import React, {useContext} from 'react';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import {AppContext} from '../App';
import './Item.css';

export default function Item() {
    const dummyProps = useContext(AppContext)
    return (
        <Col>
            <Card style={
                {width: '23rem'}
            }>
                <Card.Img variant="top" 
                    src="../img/bait.svg"
                    className="myCard-img mt-3"
                    style={{width: '10rem'}}/>
                <Card.Body>
                    <Card.Title>{dummyProps.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fw-bold">{`$${dummyProps.price}`}</Card.Subtitle>
                    <Card.Text> {
                        dummyProps.description
                    } </Card.Text>
                    <Container>
                      <Row className="gy-2 gx-0">
                        <Col className="mx-0" xs={4}>
                          <Button variant="danger">Go back</Button>
                        </Col>
                        <Col xs={3}>
                          <Form.Select aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                        </Col>
                        <Col xs={5}>
                          <Button variant="primary p-2" type="submit">Add to Cart</Button>
                        </Col>
                      </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}