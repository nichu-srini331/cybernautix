import './App.css';
import Home from './component/Home';
import { Particle } from './component/Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './component/events';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
     <>
     <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contactus" element={<Contact/>} />
                </Routes>
            </Router>
            <Particle/>
     </>
    
    </div>
    
  );
}

export default App;
