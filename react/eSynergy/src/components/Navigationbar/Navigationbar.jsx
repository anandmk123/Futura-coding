import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigatiobbar.css'

function Navigationbar() {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src="https://www.esynergysoft.com/img/logo.png" alt="logo" className='img-fluid logo_style'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <img src="https://www.esynergysoft.com/img/menu.svg" alt="" className='img-fluid toggle_style'/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav>
          <Nav.Link href="#home" className='px-lg-3 py-lg-0 py-3' style={{color:'#d82345'}}>Home</Nav.Link>
          <Nav.Link href="#Industries" className='px-lg-3 py-lg-0 py-3 navlink_style'>Company</Nav.Link>
          <Nav.Link href="#Industries" className='px-lg-3 py-lg-0 py-3 navlink_style'>Industries</Nav.Link>
          <Nav.Link href="#Careers" className='px-lg-3 py-lg-0 py-3 navlink_style'>Careers</Nav.Link>
          <Nav.Link href="#MemberLogin" className='px-lg-3 py-lg-0 py-3 navlink_style'>Member Login</Nav.Link>
          <Nav.Link href="#Contact" className='px-lg-3 py-lg-0 py-3 navlink_style'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigationbar
