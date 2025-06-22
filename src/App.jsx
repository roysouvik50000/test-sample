import "./App.css";
import Calculator from "./component/calculator";
import { CalculatorContext } from "./calculatorContext";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [inputText, setInputText] = useState("");
  return (
    <>
      <CalculatorContext.Provider
        value={{ result, setResult, inputText, setInputText }}
      >
        <div className="h-screen pt-5 bg-linear-to-r/hsl from-indigo-900 to-teal-950">
          <Calculator />
        </div>
      </CalculatorContext.Provider>
    </>
  );
}

export default App;
