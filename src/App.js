import React from "react";
import "./App.css";
import InputText from "./components/InputText/InputText";
import lofi from "./images/lofi.png";

function App() {
  return (
    <div className="main-div-app">
      <img src={lofi} alt="background" />
      <h1>Decodificador de texto</h1>
      <div className="app">
        <InputText />
      </div>
    </div>
  );
}

export default App;
