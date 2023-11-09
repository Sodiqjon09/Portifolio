import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Services";
import Button from "./button_click/button";
function App() {
  return (
    <div className="App">
      <Router> {/* BrowserRouter componentini o'zgartirish */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Services o'rniga Contact */}
          <Route path="/button" element={<Button />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;