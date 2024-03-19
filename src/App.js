import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<div>About</div>} />
            <Route path="skills" element={<div>Skills</div>} />
            <Route path="contact" element={<div>Contact</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
