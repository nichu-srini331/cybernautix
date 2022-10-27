import "./events.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Particle } from "./Particle";
import image from "../image/tech1.jpg";
import image2 from "../image/tech2.jpg";
import image5 from "../image/tech5.jpg";
import image3 from "../image/tech3.jpg";
import image4 from "../image/tech4.jpg";
import image6 from "../image/tech6.jpg";
import nimage1 from "../image/ntech1.jpg";
import nimage2 from "../image/ntech2.jpg";
import nimage3 from "../image/ntech3.jpg";
import nimage4 from "../image/ntech4.jpg";
import nimage5 from "../image/ntech5.jpg";
import { Link } from "react-router-dom";

import {Animated} from "react-animated-css";

export default function Events() {
  return (
    <div>
      <Navigation />
      <div>
     
        <div>
        <h2 className="eh1"> Technical Events </h2>
        
        <div class="container ">
          <div class="row justify-content-centre">
            <div class="col-sm-6 col-md-4 col-lg-4  ">
              <Link to="/events-dPy">
                <div className="grid circle-1">
                  <img src={image} alt="" />
                  <h2 className="evename">
                    Python <br /> Coding
                  </h2>
                </div>
              </Link>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={image2} alt="" />
                <h2 className="evename">
                  Blind <br /> Coding
                </h2>
              </div>
            </div>
            <div class="s1 col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={image3} alt="" />
                <h2 className="evename">
                  Capture <br /> the Flag
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div class="s1 col-sm-6 col-md-4 col-lg-4 ">
              <div class="grid circle-1 ">
                <img src={image4} alt="" />
                <h2 className="evename">
                  UI <br /> Designing
                </h2>
              </div>
            </div>
            <div class="s1 col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={image5} alt="" />
                <h2 className="evename">
                  Solo <br /> Compile{" "}
                </h2>
              </div>
            </div>

            <div class="s1 col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={image6} alt="" />
                <h2 className="evename">
                  Paper <br /> Presentation
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Animated 
         animationIn="tada" 
         animationOut="zoomOut" 
         animationInDuration={1000} 
         animationOutDuration={1000} 
         isVisible={true}
         animateOnMount={true}
      >
     
      <div style={{ marginTop: "4%" }}>
        <h2 className="eh1">Non Technical Events </h2>

        <div class="container ">
          <div class="row justify-content-centre">
            <div class="col-sm-6 col-md-4 col-lg-4  ">
              <div className="grid circle-1">
                <img src={nimage1} alt="" />
                <h2 className="evename">
                  Poetry <br /> Writing
                </h2>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={nimage2} alt="" />
                <h2 className="evename">Connexions</h2>
              </div>
            </div>
            <div class="s1 col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={nimage3} alt="" />
                <h2 className="evename">
                  Treasure <br /> Hunt
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div class="s1 col-sm-6 col-md-4 col-lg-4 ">
              <div class="grid circle-1 ">
                <img src={nimage4} alt="" />
                <h2 className="evename">
                  {" "}
                  Cubinix <br />
                  Solving
                </h2>
              </div>
            </div>
            <div class="s1 col-sm-6 col-md-4 col-lg-4">
              <div class="grid circle-1 ">
                <img src={nimage5} alt="" />
                <h2 className="evename">
                  Talent <br /> Gig{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Animated>
     
      
      <Particle />
    </div>
    </div>
  );
}
