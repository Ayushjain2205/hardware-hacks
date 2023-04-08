import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Config from "./pages/Config";
import Automation from "./pages/Automation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/config" element={<Config />} />
        <Route path="/automation" element={<Automation />} />
      </Routes>
    </div>
  );
}

export default App;
