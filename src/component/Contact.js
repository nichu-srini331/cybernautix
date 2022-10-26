import React from 'react'
import Navigation from './navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contact.css"
import { Particle } from './Particle';
import {Animated} from "react-animated-css";


export default function Contact() {
  return (
    <div>
       <Particle/>

        <Navigation/>
        <Animated 
         animationIn="tada" 
         animationOut="zoomOut" 
         animationInDuration={1000} 
         animationOutDuration={1000} 
         isVisible={true}
      >
        <Container>
            <p className='cp1'>Contact Us</p>
      <Row>
        <Col className='cd1'>
        {/* <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8975604743096!2d80.13891621464958!3d13.356645390604042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1666782180674!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
     */}
        </Col>
        <Col className='cd2'>
            <div className='ctcont1'>
                <div className='cttxt'>
                    <div className='cttxt1'>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="36" height="36" fill="white" className="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                
               </svg>
                    </div>
                
               <p className='ctcp1'>R.M.K Engineering College,Kavarapettai,Gumudipoondi.</p>

                </div>
                <div className='cttxt'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-envelope" viewBox="0 0 16 16">
               <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
               <p className='ctcp1'>rmk113@rmkec.ac.in</p>

                </div>
                <div className='cttxt'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
               <p className='ctcp1'>123-098-5674</p>
  
                </div>
            </div>
        </Col>
      </Row>
      
    </Container>
    
          
      </Animated>

    </div>
  )
}
