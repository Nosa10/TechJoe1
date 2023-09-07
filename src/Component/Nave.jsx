import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nave() {

  return (
    <Navbar expand="lg" className='nave' >
      <Container >
        <Navbar.Brand href="/home" className='brand'><span>Kharey </span>Web Design</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='justify-content-end navee'>
            <Nav.Link href="/home" className='navee'>Home</Nav.Link>
            <Nav.Link href="/signin" className='navee'>SignIn</Nav.Link>
            <Nav.Link href="#about" className='navee'>About</Nav.Link>
            <Nav.Link href="#hero" className='navee'>Hero</Nav.Link>
            <Nav.Link href="#newsletter" className='navee'>Newsletter</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nave

