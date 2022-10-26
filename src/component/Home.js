import React from 'react'

import "./home.modules.css"
import "../text/future-earth.ttf"
import circuit from "../image/pngwing.com.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navigation from './navbar';
import { Particle } from './Particle';

export default function Home() {
  return (
    <div className='container-fluid home'>
      <Particle/>
        <Navigation/>
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
