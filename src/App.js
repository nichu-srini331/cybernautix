import './App.css';
import Home from './component/Home';
import { Particle } from './component/Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './component/events';
import EventDetails from './component/event-details';
import Contact from './component/Contact';
import Aos from 'aos';
import {useEffect} from 'react';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);

  return (
    <div className="App">
     <>
     <Router>
                <Routes>
                    <Route path="/" element={<> <Home />
                    <Footer />
                    </>
                      
                      
                      
                     } />
                    <Route path="/events" element={<>
                    <Events />
                    <Footer />
                  
                  </>} />
                    <Route path="/events/:id" element={
                    <>
                    
                    
                    <EventDetails />
                    <Footer />
                    </>
                    
                    
                    } />
                    {/* <Route path="/events-dFlag" element={<EventDetails data="Capture the Flag" />} />
                    <Route path="/events-dBlind" element={<EventDetails data="Blind Coding" />} />
                    <Route path="/events-dUI" element={<EventDetails data="UI Designing" />} />
                    <Route path="/events-dSolo" element={<EventDetails data="Solo Coding" />} />
                    <Route path="/events-dPaper" element={<EventDetails data="Paper Presentation" />} />
                    <Route path="/events-dPoetry" element={<EventDetails data="Poetry Writing" />} />
                    <Route path="/events-dConnx" element={<EventDetails data="Connextions" />} />
                    <Route path="/events-dHunt" element={<EventDetails data="Treasure Hunt" />} />
                    <Route path="/events-dCub" element={<EventDetails data="Cubix Solving" />} />
                    <Route path="/events-dTal" element={<EventDetails data="Talent Gig" />} /> */}
                    <Route path="/contactus" element={<Contact/>} />
                </Routes>
            </Router>
            
     </>
    
    </div>
    
  );
}

export default App;
