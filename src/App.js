import "./App.css";
import InputText from "./components/InputText/InputText";
import OutputText from "./components/OutputText/OutputText";

function App() {
  return (
    <div className="main-div-app">
      <h1>Decodificador de texto</h1>
      <div className="app">
        <InputText />
      </div>
    </div>
  );
}

export default App;
