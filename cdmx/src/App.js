import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Home2 from './Components/Home2.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Home2 />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
