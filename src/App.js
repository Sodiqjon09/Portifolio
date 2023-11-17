import React, { useEffect, useState } from "react";
// import FetchData from "./FetchData";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/About";
import Contact from "./components/Services";
import Button from "./button_click/button";
import Home from "./components/Home";
// import AboutJson from "./components/about/about.json"

function App() {
  const [data, SetData] = useState([]);
  // useEffect(() => {
  //   axios.delete("https://reqres.in/api/users/2")
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }, []);
  return (
    <div className="App">
      {/* <h2>Axios Library in React JS</h2> */}
      {/* {
      data.map((el, i) => {
        return <p key={i}>{el.email}</p>;
      })
      } */}
      {/* <FetchData/> */}
      <Router>
        <Home />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/button" element={<Button />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
