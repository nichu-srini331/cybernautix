import './App.css';
import Home from './component/Home';
import { Particle } from './component/Particle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Particle/>
      <Home/>
    </div>
  );
}

export default App;
