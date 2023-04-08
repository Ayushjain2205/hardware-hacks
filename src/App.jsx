import { useState } from "react";
import Sheet from "react-modal-sheet";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <button class="btn btn-primary">Button</button>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
}

export default App;
