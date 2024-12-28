import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Components for each tab
import Home from "./components/Home";
import HonorsPortfolio from "./components/HonorsPortfolio";
import Projects from "./components/Projects";

// Quarter Pages
import Autumn21 from "./components/quarters/Autumn21"
import Winter22 from "./components/quarters/Winter22"
import Spring22 from "./components/quarters/Spring22"
import Autumn22 from "./components/quarters/Autumn22"
import Winter23 from "./components/quarters/Winter23"
import Spring23 from "./components/quarters/Spring23"
import Summer23 from "./components/quarters/Summer23"
import Autumn23 from "./components/quarters/Autumn23"
import Winter24 from "./components/quarters/Winter24"
import Spring24 from "./components/quarters/Spring24"
import Autumn24 from "./components/quarters/Autumn24"

// Styles
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/honors-portfolio">Honors Portfolio</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes for Tabs */}
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* HONORS PORTFOLIO */}
          <Route path="/honors-portfolio" element={<HonorsPortfolio />} />
          <Route path="/honors-portfolio/Autumn 21" element={<Autumn21/>} />
          <Route path="/honors-portfolio/Winter%22" element={<Winter22/>} />
          <Route path="/honors-portfolio/Spring%22" element={<Spring22/>} />
          <Route path="/honors-portfolio/Autumn%22" element={<Autumn22/>} />
          <Route path="/honors-portfolio/Winter%23" element={<Winter23/>} />
          <Route path="/honors-portfolio/Spring%23" element={<Spring23/>} />
          <Route path="/honors-portfolio/Summer%23" element={<Summer23/>} />
          <Route path="/honors-portfolio/Autumn%23" element={<Autumn23/>} />
          <Route path="/honors-portfolio/Winter%24" element={<Winter24/>} />
          <Route path="/honors-portfolio/Spring%24" element={<Spring24/>} />
          <Route path="/honors-portfolio/Autumn%24" element={<Autumn24/>} />

          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
      </div>
    </Router>
  );
}


export default App;
