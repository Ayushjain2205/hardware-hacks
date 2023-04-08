import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Config from "./pages/Config";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </div>
  );
}

export default App;
