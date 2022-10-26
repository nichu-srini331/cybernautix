import "./events.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

import image from "../image/dummy.png";

export default function Events() {
  return (
    <div>
      <Navigation />
      <div>
        <h2 className="eh1"> Technical Events </h2>

        <div className="container-fluid">
          <div className="row ">
            <div className="row ">
              <img src={image} className="image" alt="" />
            </div>

            <div className="row">
              <div className="col-6 para"></div>
              <div className="col-6 ">

              <div class="card" style={{width : '576px',
                marginLeft : 'auto',
                marginRight : 'auto'
            }}>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign : 'center'}} className="ctxt">PYTHON CODING</h5>
   
    <p class="card-text" style={{color : 'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
   
  </div>
</div>

              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
