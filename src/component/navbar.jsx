import React from 'react'
import logo from "../image/rmk.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigation() {
  return (
    <div class="row">
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="hlogo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto hc1">
            <Nav.Link href="#home"><span className='hp1'>Home</span></Nav.Link>
            <Nav.Link href="events"><span className='hp1'>Events</span></Nav.Link>
            <Nav.Link href="#link"><span className='hp1'>Registerations</span></Nav.Link>
            <Nav.Link href="#link"><span className='hp1'>Contact </span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/* <nav className='hcont'>
        
        <div className='hc1'>
        <span className='hp1'>Home</span>
        <p className='hp1'>Event</p>
        <p className='hp1'>Registration</p>
        <p className='hp1'>Contact</p>
        </div>
       
        </nav> */}
       </div>
  )
}
