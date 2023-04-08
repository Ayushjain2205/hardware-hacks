import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sheet from "react-modal-sheet";
import "./App.css";

import Landing from "./pages/Landing";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
