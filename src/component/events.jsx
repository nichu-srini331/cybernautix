import "./events.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Particle } from './Particle';
import image from "../image/dummy.png";

export default function Events() {
  return (
    <div>
        <Particle/>
      <Navigation />
      <h2 className="eh1"> Technical Events </h2>

      <div class="container c1 ">
                <div class="row justify-content-center">
                  <div class="s1 col-sm-6 col-md-4 col-lg-4 ">
                    <div class="grid grid1">
                        
                    </div>
                  </div>
                  <div class="s1 col-sm-6 col-md-4 col-lg-4">
                    <div class="grid grid2">
                
                    </div>
                  </div>
                  <div class="s1 col-sm-6 col-md-4 col-lg-4">
                    <div class="grid grid3">
                
                    </div>
                  </div>
                  
                  
              
                    </div>

                    <div className="row justify-content-center">

                

                
                    <div class="s1 col-sm-6 col-md-4 col-lg-4 ">
                      <div class="grid grid5 ">
                  
                      </div>
                    </div>
                    <div class="s1 col-sm-6 col-md-4 col-lg-4">
                      <div class="grid grid6">
                  
                      </div>
                    </div>
                    
                    
                

                    
  
                </div>

              </div>
    </div>
  );
}
