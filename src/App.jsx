import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DynamicBanner from "./component/DynamicBanner";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicBanner />} />
      </Routes>
    </Router>
  );
}
