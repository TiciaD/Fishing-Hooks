import React, {useContext} from 'react';
import {Navbar, Nav, Dropdown, Container, Button, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import {NavLink} from 'react-router-dom';
import CartContext from '../contexts/CartContext';

export default function MyNavbar(props) {
    const myCart = useContext(CartContext);
    console.log(myCart);
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand>
                  <img
                    alt="fish logo"
                    src="../img/fish_logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                Hooked On a Feeling - Bait {'&'} Tackle
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink to="/home" className="nav-link" activeClassName="active">HOME</NavLink>
                    <NavLink to="/about"className="nav-link" activeClassName="active">ABOUT</NavLink>
                    <NavLink to="/products"className="nav-link" activeClassName="active">PRODUCTS</NavLink>
                        <Nav>
                            <Dropdown className="d-inline mx-2 align-self-end" autoClose={false}>
                                <Dropdown.Toggle id="dropdown-autoclose-false">
                                <FaShoppingCart color="white" fontSize="25px"/>
                                <Badge>0</Badge>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="light" className="p-1" onClick={props.onShowCart}>
                                <img
                                    alt="shopping cart"
                                    src="../img/shopping_cart.svg"
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                />{' '} <Badge bg="danger">9</Badge>
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                        </Nav>
                    <NavLink to="/login"className="nav-link" activeClassName="active">SignUp</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}
