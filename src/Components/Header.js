import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
        <div>
            <img src='/img/tree_background.jpg' className="img-fluid" alt="outdoors"/>
            <Container className="position-absolute top-50 start-50 translate-middle">
                <Row xs={1}
                    md={2}
                    className="g-3">
                    <Col className="d-flex justify-content-center mt-5"
                        xs={12}
                        md={6}>
                        <Card className="shadow-lg p-3 mb-5 bg-body rounded"
                            style={
                                {width: '18rem'}
                        }>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                                                                                        the card's content.
                                </Card.Text>
                                <Button variant="dark">See Accessories</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center mt-5"
                        xs={12}
                        md={6}>
                        <Card className="shadow-lg p-3 mb-5 bg-body rounded"
                            style={
                                {width: '18rem'}
                        }>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                                                                                        the card's content.
                                </Card.Text>
                                <Button variant="dark">See Tools</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
