import "./travel.css";
import React from "react";
import Navigation from "./navbar";
import { Particle } from "./Particle";
import { Link, useParams } from "react-router-dom";
import busRoute from "./busRoute";

export default function Travel(props) {
    return (
        <div>
            <Navigation />
            {busRoute.map((bus, index) => (
                <div class="card-body">
                    <h4 class="card-title gradient-text">{bus.busStarting}</h4>
                    <h5>{"Bus Number: "+bus.busNumber}</h5>
                    <h6 class="card-text" style={{ color: "whitesmoke" }}>
                        <ul>{bus.busRoutes}</ul>
                    </h6>

                    
                </div>
            ))}
            <div id="hod" >
                        hi
                        </div>
            <Particle />
        </div>
    );
}
