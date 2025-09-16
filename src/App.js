import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
