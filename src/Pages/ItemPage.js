import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {AppContext} from '../App';

export default function ItemPage() {
    const {id} = useParams()
    const products = useContext(AppContext);
    console.log({cartInCart: products});
    const currentItem = products.items.find(item => item.id === parseInt(id))

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        <Col>
          <Card className="h-100"style={{width: '23rem'}}>
            <Card.Img variant="top" 
                src="../img/bait.svg"
                className="myCard-img mt-3"
                style={{width: '10rem'}}/>
            <Card.Body>
                <Card.Title>{currentItem.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">{`$${currentItem.price}`}</Card.Subtitle>
                <Card.Text> {currentItem.description}</Card.Text>
                <Container>
                    <Row className="gy-2 gx-0 justify-content-center">
                    <Col className="mx-0" xs={6}>
                        <Button as={Link} to={'/products'} variant="success">Back</Button>
                    </Col>
                    <Col xs={6}>
                        <Button variant="primary" onClick={products.handleAddItem}>Add to Cart</Button>
                    </Col>
                    </Row>
                </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

