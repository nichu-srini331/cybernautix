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
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { animation } from "react-reveal/globals";
export default function Events() {
  return (
    <div>
      <Navigation />
      <div>
      <Fade left >
        <h2 className="eh1">Events </h2>
       </Fade>
        <div class="container ">
        
       
          <div class="row justify-content-centre">
          
            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/1" className="link">
                <div className="grid circle-1">
                  <img src={image6} alt="" />
                  <div className="align"><h2 className="evename">
                    Paper <br /> Presentation                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/2" className="link">
                <div className="grid circle-1">
                  <img src={image3} alt="" />
                  <div className="align"><h2 className="evename">
                    Capture <br /> the flag
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/3" className="link">
                <div className="grid circle-1">
                  <img src={nimage3} alt="" />
                  <div className="align"><h2 className="evename">
                   Treasure hunt
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/4" className="link">
                <div className="grid circle-1">
                  <img src={image5} alt="" />
                  <div className="align"><h2 className="evename">
                    Solo <br /> Compile
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/5" className="link">
                <div className="grid circle-1">
                  <img src={image} alt="" />
                  <div className="align"><h2 className="evename">
                    Optimized <br /> Coding
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/6" className="link">
                <div className="grid circle-1">
                  <img src={nimage1} alt="" />
                  <div className="align"><h2 className="evename">
                    Poetry <br /> Writing
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 pad ">
            <Fade left >
              <Link to="/events/7" className="link">
                <div className="grid circle-1">
                  <img src={nimage2} alt="" />
                  <div className="align"><h2 className="evename">
                    Connextions
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>
            
         
          
          
         
            
         
           

        

          
          </div>
        
        </div>
      </div>
     
      
     
    
         
       
      
      <Particle />
    </div>
   
  );
}