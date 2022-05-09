import React from 'react';
import './menubar.css';
import { Button, Container, Dropdown, Form, FormControl, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookAtlas,
  faBookOpen,
  faCartArrowDown,
  faCartShopping,
  faHeadphonesSimple,
  faHouse, faUser,

} from "@fortawesome/free-solid-svg-icons";


export default function Navigationbar(){
  return (
    <div>

<Navbar expand="lg" style={{zIndex:"1",width:"100%",backgroundColor:"#2596be"}}>
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#books">Books</Nav.Link>
        <Nav.Link href="#audiobooks">Audiobooks</Nav.Link>
       
        <Form className="d-flex search">
        <FormControl
          type="search"
          placeholder="Search books"
          className="me-2"
          aria-label="Search"
        />
        <Button className='search-btn'>Search</Button>
      </Form>
      </Nav>
      <div className='right-nav'>
      <Nav.Link href="#login" className='login'>Login</Nav.Link>
      <Nav.Link href="#cart"><FontAwesomeIcon icon={faCartShopping}/>Cart</Nav.Link>
      
      </div>

        {/* <DropdownButton id="dropdown-basic-button" title={ <FontAwesomeIcon icon={faUser} />}>
  <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
</DropdownButton> */}
     
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}
