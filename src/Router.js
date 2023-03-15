import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import LabPage from "./Pages/LabPage";
import Articles from "./Pages/Articles";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/a/:id" element={<Articles />} />
        <Route path="/about" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
