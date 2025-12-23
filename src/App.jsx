import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import "./styles/global.css";
import "./styles/hero.css";
import "./styles/skills.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/navbar.css";
function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
