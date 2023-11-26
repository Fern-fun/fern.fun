import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import LabPage from "./pages/LabPage";
import About from "./pages/About";

import Footer from "./components/Footer/Footer";

function Router() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
