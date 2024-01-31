import React, { useState } from "react";
import "./OutputTextStyle.css";
import lofi from "../../images/lofi.png";

function OutputText({ encryptedText }) {
  const [outputText, setOutputText] = useState(encryptedText);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
    } catch (err) {
      console.error("Erro ao copiar o texto: ", err);
    }
  };

  const handleClearClick = () => {
    setOutputText("");
  };

  return (
    <div className="output-style">
      <p>{outputText}</p>
      {/* <img src={lofi} /> */}
      <div>
        <button className="btn" onClick={handleCopyClick}>
          Copiar
        </button>
        <button className="btn" onClick={handleClearClick}>
          Limpar
        </button>
      </div>
    </div>
  );
}

export default OutputText;
