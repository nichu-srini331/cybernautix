import "./event-details.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { Particle } from './Particle';
import image from "../image/dummy.png";
import { useParams } from "react-router-dom";
import data from "./data";

export default function EventDetails(props) {
   
    let k=useParams()
    let x=data[k.id-1]
    console.log(data)
  return (
    <div>
         
      <Navigation />
        <div className="container-fluid pad">
            <div className="row r1 text-center">
                <h1 className="gradient-text" style={{fontSize : '50px'}}>{x.event}</h1>
            </div><br></br>
            <div className="row text-center">
                <div class="col">
                    <h6 style={{color : 'whitesmoke',
                    fontSize : '22px'
                
                }}>Timing</h6>
                    <p className="gradient-text">{x.time}</p>
                </div>
                <div class="col">
                    <h6 style={{color : 'white',
                fontSize : '22px'
                }}>Venue</h6>
                    <p className="gradient-text">{x.venue}</p>
                </div>
            </div>
            <div className="row ">
                <p style={{color : 'white'}} className="txt">{x.detail}</p>
            </div><br></br>
            <div className="row">
                <div class="card c" style={{marginLeft:'auto',marginRight:'auto'}}>
                    <div class="card-body">
                        <h4 class="card-title gradient-text">Rules and Regulations</h4>
                    <h6 class="card-text" style={{color : 'whitesmoke'}}>
                        <ul>
                            {
                                (x.rules.map((data1)=>
                                <li>{data1}</li>

                                ))
                            }
                        </ul>
                    </h6>
                    </div>
                </div>
            </div>
            <div className="evebtn">
            <button className='dbtn1' style={{marginTop : '2%'}}>Register</button>
            </div>
        </div>
        <Particle/>
    </div>
  );
}
