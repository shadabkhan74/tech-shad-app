import React from 'react'
// import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
const Navbar1 = () => {
  return ( <>
<div className='container-fluid nav_bg' >
<div className='row' >
    <div className='col-10 mx-auto ' > 
     
    <Navbar id="nav1" bg="light" expand="lg">
      <Container>
        <Navbar.Brand id='logo' className=' px-3 fs-3 w-5' to="/">TECH_SHAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink id='link'  className='  px-3' to="/">Home</NavLink>
            <NavLink id='link' className=' px-3'  to="/service">service</NavLink>
            <NavLink id='link' className=' px-3' to="/about">about</NavLink>
            <NavLink id='link' className=' px-3' to="/contact">contact</NavLink>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>
</div>
</div>
</>
    )
}

export default Navbar1;