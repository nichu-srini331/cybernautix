import './App.css';
import Home from './component/Home';
import { Particle } from './component/Particle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './component/events';
function App() {
  return (
    <div className="App">
     <>
     <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </Router>
            <Particle/>
     </>
    
    </div>
    
  );
}

export default App;
