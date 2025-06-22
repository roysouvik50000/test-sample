import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";


export default function Calculator() {
  const allCalculatorButton = [
    "AC",
    "%",
    "⌫",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  // const [result, setResult] = useState("");
  // const [inputText, setInputText] = useState("");

  return (
    <>
      <div
        className="border-y-amber-300 border-4 rounded-3xl py-3 px-3 h-[500px] w-96 mx-auto mt-10 flex flex-col items-center justify-between bg-blue-400"
        id="calculator"
      >
        <h1 className="font-bold text-yellow-500 text-2xl">CALCULATOR</h1>
        <CalculatorDisplay/>

        <div className="flex flex-wrap px-4">
          {allCalculatorButton.map((v, i) => (
            <CalculatorButton
              buttonText={v}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
