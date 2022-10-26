import "./events.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import image from "../image/tech1.jpg";

export default function Events() {
  return (
    <div>
      <Navigation />
      <h2 className="eh1"> Technical Events </h2>

      <div class="container c1 ">
                <div class="row ">
                  <div class="col-sm-6 col-md-4 col-lg-4 circle-1  ">
                    <img src={image} alt="" />
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

              <div class="circle-1  ">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/02/b7/c2/0b/skanderbeg-square.jpg" alt="Skanderbeg Square Albania" />
                  </div>
                

    </div>
  );
}
