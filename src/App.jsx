/**
 * @copyright amina 
 * @license Apache-2 
 */

/**
 * components
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import Skill from "./components/skill";
import Highlights from "./components/highlights";
import Projects from "./components/project";
import Contact from "./components/Contact";
import ImageViewer from "./components/ImageViewer"; // ⬅️ Import the new component

const MainContent = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Skill />
      <Highlights />
      <Projects />
      <Contact />
    </main>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/view-image" element={<ImageViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
