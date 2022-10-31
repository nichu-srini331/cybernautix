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
import { Link } from "react-router-dom";
import Timer from "./Countdown/Timer";

export default function Home() {
  return (
    <div className='container-fluid home'>
      <Particle/>
        <Navigation/>
       <div className='row'>
        <div className='head'>
        <p className='hp2'>DEPARTMENT OF INFORMATION TECHNOLOGY <br></br>
        Presents</p>
        
        </div>
        <div className='col-4'>
        </div>
       </div>
       <div className='row'>
       <div className='hbody'>
        <p className='hp4'>CYBERNAUTIX’22</p>
        </div>
       
        <div className='row mb-3 htabl text-center'>
          <div className='col-md-3'></div>
            <div className='col-md-2 htbcont'>
                <p className='htp1'>

                <img id="calender" src="https://github.com/nitinmano/image-store/blob/main/Cal-Green.gif?raw=true" alt="logo" width="55px" height="55px" />




                </p>
                <p className='htp2' >14 November 2022</p>

            </div>
            
            <div className='col-md-2 htbcont'>
               <p className=' htp1'><lord-icon
                src="https://cdn.lordicon.com/isdxbcqi.json"
                colors="primary:#00ff66,secondary:#00ff66"
                trigger="loop"
                style={{ width: "75px", height: "75px" }}
              ></lord-icon></p>
                <p className='htp2'>Free</p>
            </div>
            
            <div className='col-md-2 htbcont'>
               <p className='htp1'><lord-icon
                src="https://cdn.lordicon.com/elzslyvl.json"
                trigger="loop"
                colors="primary:#00ff66,secondary:#00ff66"
                state="hover-spin"
                style={{ width: "75px", height: "75px" }}
              ></lord-icon></p>
                <p className='htp2'>R.M.K Engineering College</p>
            </div>
            <div className='col-md-3'></div>

        </div>
      
       </div>
       <div className='row'>
       <Timer />
       </div>
        {/* <div className='hcimg'>
            <img src={circuit} className="himg2"/>

            
        </div> */}
        

        {/* <Link to="/events" className="link">
        <button className='hbtn1'>EVENT</button>
        </Link> */}
        
        
    </div>
  )
}
