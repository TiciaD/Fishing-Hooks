import React, {useContext} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Item.css';
import {AppContext} from '../App';

const Item = (props) => {
// Model
  const cart = useContext(AppContext);

    const handleAddItem = (e) => {
        cart.addItem(props)
        console.log({cartItem: props});
        console.log({cartItem: props.amount});
    }

  return (
// View
    <Col>
        <Card className="h-100"style={
            {width: '23rem'}
        }>
            <Card.Img variant="top" 
                src="../img/bait.svg"
                className="myCard-img mt-3"
                style={{width: '10rem'}}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">{`$${props.price}`}</Card.Subtitle>
                <Card.Text> {
                    props.description
                } </Card.Text>
                <Container>
                    <Row className="gy-2 gx-0 justify-content-center">
                    <Col className="mx-0" xs={6}>
                        <Button as={Link} to={`/products/${props.id}`} state={{ from: 'products' }} variant="success">See More</Button>
                    </Col>
                    <Col xs={6}>
                        <Button variant="primary" onClick={handleAddItem}>Add to Cart</Button>
                    </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </Col>
  );
};

export default Item;