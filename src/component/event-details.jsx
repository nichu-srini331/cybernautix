import "./event-details.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { Particle } from './Particle';
import image from "../image/dummy.png";

export default function EventDetails(props) {
    
  return (
    <div>
         
      <Navigation />
        <div className="container-fluid pad">
            <div className="row r1 text-center">
                <h1 className="gradient-text" style={{fontSize : '50px'}}>{props.data}</h1>
            </div><br></br>
            <div className="row text-center">
                <div class="col">
                    <h6 style={{color : 'whitesmoke',
                    fontSize : '22px'
                
                }}>Timing</h6>
                    <p className="gradient-text">11.00 AM</p>
                </div>
                <div class="col">
                    <h6 style={{color : 'white',
                fontSize : '22px'
                }}>Venue</h6>
                    <p className="gradient-text">R.M Block</p>
                </div>
            </div>
            <div className="row ">
                <p style={{color : 'white'}} className="txt">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Lorem Ipsum is
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  Lorem          
                     </p>
            </div><br></br>
            <div className="row">
                <div class="card c" style={{marginLeft:'auto',marginRight:'auto'}}>
                    <div class="card-body">
                        <h4 class="card-title gradient-text">Rules and Regulations</h4>
                        <h6 class="card-text" style={{color : 'whitesmoke'}}>
                        <ul>
<li>                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
   <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>   
    <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</li>                
                    </ul>                            </h6>
                    </div>
                </div>
            </div>
            <div className="evebtn">
            <button className='dbtn1'>Register</button>
            </div>
        </div>
        <Particle/>
    </div>
  );
}
