import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import ContextProvider from "./ContextProvider";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <ContextProvider />
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
