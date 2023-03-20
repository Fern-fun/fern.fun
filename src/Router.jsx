import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import LabPage from "./Pages/LabPage";
import About from "./Pages/About";

import { Helmet } from "react-helmet";

function Router() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Fern.fun</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
