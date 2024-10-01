import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<div>About</div>} />
            <Route path="projects" element={<div>projects</div>} />
            <Route path="contact" element={<ContactPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
