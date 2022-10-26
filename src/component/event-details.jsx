import "./event-details.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

import image from "../image/dummy.png";

export default function EventDetails() {
  return (
    <div>
      <Navigation />
        <div className="container">
            <div className="row r1 text-center">
                <h1>Python Coding</h1>
            </div><br></br>
            <div className="row text-center">
                <div class="col">
                    <h6 style={{color : 'whitesmoke'}}>When</h6>
                    <p className="edp">11.00 AM</p>
                </div>
                <div class="col">
                    <h6 style={{color : 'white'}}>Where</h6>
                </div>
            </div>
            <div className="row ">
                <h5 style={{color : 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </h5>
            </div><br></br>
            <div className="row">
                <div class="card" style={{width : '600px',marginLeft:'auto',marginRight:'auto'}}>
                    <div class="card-body">
                        <h4 class="card-title" style={{color:'whitesmoke'}}>Rules and Regulations</h4>
                        <h6 class="card-text" style={{color : 'whitesmoke'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                    </div>
                </div>
            </div>
            <button className='hbtn1'>Register</button>
        </div>
    </div>
  );
}