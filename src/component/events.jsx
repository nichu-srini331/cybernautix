import "./events.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Particle } from './Particle';
import image from "../image/tech1.jpg";

export default function Events() {
  return (
    <div>
        <Particle/>
      <Navigation />
      <h2 className="eh1"> Technical Events </h2>

      <div class="container c1 ">
                <div class="row justify-content-centre">
                  <div class="col-sm-6 col-md-4 col-lg-4  ">
                    <div className="grid circle-1">
                    <img src={image} className="hover" alt="" />
                    <h1 className="evename">Python</h1>
                    </div>
                    
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                    <div class="grid circle-1 ">
                    <img src={image} alt="" />
                    <h1 className="evename">Python</h1>

                    </div>
                  </div>
                  <div class="s1 col-sm-6 col-md-4 col-lg-4">
                  <div class="grid circle-1 ">
                    <img src={image} alt="" />
                    <h1 className="evename">Python</h1>

                    </div>
                  </div>
                  
                  
              
                    </div>

                    <div className="row justify-content-center">

                

                
                    <div class="s1 col-sm-6 col-md-4 col-lg-4 ">
                    <div class="grid circle-1 ">
                    <img src={image} alt="" />
                    <h1 className="evename">Python</h1>

                    </div>
                    </div>
                    <div class="s1 col-sm-6 col-md-4 col-lg-4">
                    <div class="grid circle-1 ">
                    <img src={image} alt="" />
                    <h1 className="evename">Python</h1>

                    </div>
                    </div>
                    
                    
                

                    
  
                </div>

              </div>

              
                

</div>
);
}