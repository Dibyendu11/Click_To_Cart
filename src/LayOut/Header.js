import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import './Header.css'
import { useState,useRef } from 'react'
import prodData from '../Product/Product.json'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate();
  const LoggingOut=()=>{
    window.localStorage.clear();
    navigate('/Login');
}

const isAuth=window.localStorage.getItem('Token Value:') 
  
  return (
    <div>
  
  <Navbar className='navbar' >
  <Container fluid>
    <Navbar.Brand href="/"><img src='../../../Image/Capture111.jpg' height={60}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className='navrbr' as={Link} to="/">Home</Nav.Link>
        <Nav.Link className='navrbr' as={Link} to="/Registration">Registration</Nav.Link>
        <Nav.Link className='navrbr' as={Link} to="/Login">Log In</Nav.Link>
        <Nav.Link className='navrbr' as={Link} to="/About">About</Nav.Link>
        <Nav.Link className='navrbr' as={Link} to="/Contact">Contact</Nav.Link>
        <Nav.Link className='navrbr' as={Link} to="/Help"> Help </Nav.Link>
        <Nav.Link className='navrbr' as={Link} to="/Feedback"> Feedback </Nav.Link>
        <button id='logout' onClick={LoggingOut} type="submit">Sign Out</button>
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header