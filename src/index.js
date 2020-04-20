import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/index.css'

function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calcBtns.push(
      <button
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="container mr-5 pl-5  mt-5">
       <div className="wrapper mt-5 pb-5">
      {" "}
      <div className="show-input pl-5 mb-3 ml-5">{input}</div>
      <div className="digits flex pl-5 pb-5">{calcBtns}</div>
      <div className="modifiers subgrid pl-5">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid pb-5 rounded">
        {/* add button */}
        <button id="add" onClick={e => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button id="subtract" onClick={e => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button id="multiply" onClick={e => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button id="divide" onClick={e => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button id="equals"
          onClick={e => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
    </div>
   
  );
}
const rootElement = document.getElementById("root");




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
