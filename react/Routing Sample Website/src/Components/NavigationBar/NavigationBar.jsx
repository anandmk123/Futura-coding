import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.css'


function NavigationBar() {
  return (

    <Navbar expand="lg" className='bg-light'>
    <Container>
      <Navbar.Brand><Link to={'/'} className='h1 linkstyle' style={{color:'rgb(7, 118, 215)'}}>Products</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to={'/'} className='linkstyle p-4'>Home</Link>
          <Link to={'/about'} className='linkstyle p-4'>About</Link>
          <Link to={'/contact'} className='linkstyle p-4'>Contact</Link>
          <Link to={'/location'} className='linkstyle p-4'>Location</Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className='d-none d-lg-flex'>
      <Nav.Link href="https://www.facebook.com/" target='_blank'><i className="bi bi-facebook" style={{fontSize:'30px'}}></i></Nav.Link>
      <Nav.Link href="https://www.instagram.com/" target='_blank'><i className="bi bi-instagram" style={{fontSize:'30px'}}></i></Nav.Link>
      <Nav.Link href="https://twitter.com/" target='_blank'><i className="bi bi-twitter" style={{fontSize:'30px'}}></i></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar
