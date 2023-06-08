import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import LabPage from "./Pages/LabPage";
import About from "./Pages/About";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/fern.fun/lab" element={<LabPage />} />
        <Route path="/fern.fun/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
