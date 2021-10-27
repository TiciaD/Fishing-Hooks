import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function MyNavbar() {
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
                    <NavLink to="/checkout"className="nav-link" activeClassName="active">CART</NavLink>
                    <NavLink to="/login"className="nav-link" activeClassName="active">SignUp</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}
