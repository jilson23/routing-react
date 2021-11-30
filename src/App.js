// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Menu from './pages/Menu';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import P404 from './pages/P404';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </div>
  );
}

export default App;
