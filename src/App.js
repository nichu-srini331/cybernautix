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
import Travel from './component/travel';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
     <>
     <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/travel" element={<Travel/>} />

                </Routes>
            </Router>
     </>
    </div>
  );
}

export default App;
