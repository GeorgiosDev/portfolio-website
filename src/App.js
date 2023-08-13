import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Socialmedia from "./components/Socialmedia";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {

  
  return (
    <div className="text-4xl font-bold">
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        <Socialmedia/>      
    </div>
  );
}

export default App;
