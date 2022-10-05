import "./App.css";
//
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-stroke">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
