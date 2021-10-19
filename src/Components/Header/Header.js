import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css"

const Header = () => {
  const{user,logOut} = useFirebase();
    return (
           <>
  <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" p-2>
    <Container>

    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

    <Nav className="me-auto">
        <Nav.Link as={HashLink} to= "/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} to= "/home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} to= "/about">About</Nav.Link>
        <Nav.Link as={HashLink} to= "/contact">Contact</Nav.Link>
        <Nav.Link as={HashLink} to= "/login#login">Login</Nav.Link>
    </Nav>

      <Navbar.Text>
        
       <div className="d-name">
       Sign In:  <a href="#login">{user?.displayName} </a>
       </div>
      </Navbar.Text>

      <Nav>
          {user?.email ?
          <Button className="l-btn" onClick={logOut} > <i class="fas fa-sign-out-alt"></i></Button> :
          <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
       </Nav>
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
 
        </>
    );
};

export default Header;