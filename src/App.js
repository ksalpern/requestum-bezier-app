import React from "react";
import Bezier from "./components/Bezier/Bezier";
import ControlButtons from "./components/ControlButtons/ControlButtons";


function App() {
  return (
    <div className="app">
      <Bezier />
      <ControlButtons />
    </div>
  );
}

export default App;
