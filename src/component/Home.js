import React from 'react'
import logo from "../image/rmk.png"
import "./home.modules.css"
import "../text/future-earth.ttf"
import circuit from "../image/pngwing.com.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Home() {
  return (
    <div className='container-fluid home'>
<div class="row">
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="hlogo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto hc1">
            <Nav.Link href="#home"><span className='hp1'>Home</span></Nav.Link>
            <Nav.Link href="#link"><span className='hp1'>Events</span></Nav.Link>
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
       <div className='row'>
        <div className='head'>
        <p className='hp2'>DEPARTMENT OF INFORMATION TECHNOLOGY <br></br>
        presents</p>
        
        </div>
        <div className='col-4'>
        </div>
       </div>
       <div className='row'>
       <div className='hbody'>
        <p className='hp4'>CYBERNAUTIX’22</p>
        </div>
       
        <div className='htable'>
            <div className='htbcont'>
                <p className='htp1'>When</p>
                <p className='htp2'>14 November 2022</p>

            </div>
            <div className='hline'>

            </div>
            <div className='htbcont'>
               <p className='htp1'>Registration Fee</p>
                <p className='htp2'>Free</p>
            </div>
            <div className='hline'>

            </div>
            <div className='htbcont'>
               <p className='htp1'>Location</p>
                <p className='htp2'>R.M.K Engineering College</p>
            </div>

        </div>
      
       </div>
       
        {/* <div className='hcimg'>
            <img src={circuit} className="himg2"/>

            
        </div> */}
        
        <button className='hbtn1'>EVENT</button>

        
        
    </div>
  )
}
