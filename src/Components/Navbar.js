import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function MyNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                React Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">ABOUT</Nav.Link>
                    <Nav.Link href="#link">PRODUCTS</Nav.Link>
                    <Nav.Link href="#link">CART</Nav.Link>
                    <Nav.Link href="#link">SignUp</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}
