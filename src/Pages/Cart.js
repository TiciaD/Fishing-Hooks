import { useContext } from 'react';
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';
import CartItem from '../Components/CartItem';
import {AppContext} from '../App';

const Cart = (props) => {
    const cartState = useContext(AppContext);
    console.log({cartInCart: cartState.cart});

    const cartItems = (
        <ul>
      {cartState.cart.map((item, index) => (
          <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          handleAddItem={cartState.addItem}
          />
          ))}
    </ul>
  );

  return (
    <Modal show={props.show} onHide={props.onClose} {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {cartItems}
        </Modal.Body>
        <Modal.Footer>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        Total Amount: ${cartState.cartAmount}
                    </Col>
                    <Col xs={6} md={4}>
                        <Button variant="primary">
                            Order
                        </Button>
                    </Col>
                    <Col xs={6} md={4}>
                        <Button variant="secondary" onClick={props.onClose}>
                            Close
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Modal.Footer>
    </Modal>
  );
};

export default Cart;
