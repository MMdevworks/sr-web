import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Careers from "./routes/Careers";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
    </>
  );
}

export default App;