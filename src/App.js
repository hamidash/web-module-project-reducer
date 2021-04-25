import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  addMem,
  addMemDisplay,
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memClear,
} from "./actions";

function App() {
  const [calcState, dispatch] = useReducer(reducer, initialState);

  // const additionOne = (e) => {
  //   e.preventDefault();
  //   dispatch(addOne());
  // }

  const applySelectedNumber = (num) => dispatch(applyNumber(num));

  const changeSelectedOper = (operation) =>
    dispatch(changeOperation(operation));

  const clearCalcDisplay = () => dispatch(clearDisplay());

  const addCalcMem = () => dispatch(addMem());

  const addCalcMemDisplay = () => dispatch(addMemDisplay());

  const calcMemClear = () => dispatch(memClear());

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={calcState.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {calcState.operation}{" "}
              </span>
              <span id="memory">
                <b>Memory:</b> {calcState.memory}{" "}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => addCalcMem()} />
              <CalcButton value={"MR"} onClick={() => addCalcMemDisplay()}/>
              <CalcButton value={"MC"} onClick={() => calcMemClear()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => applySelectedNumber(1)} />
              <CalcButton value={2} onClick={() => applySelectedNumber(2)} />
              <CalcButton value={3} onClick={() => applySelectedNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applySelectedNumber(4)} />
              <CalcButton value={5} onClick={() => applySelectedNumber(5)} />
              <CalcButton value={6} onClick={() => applySelectedNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applySelectedNumber(7)} />
              <CalcButton value={8} onClick={() => applySelectedNumber(8)} />
              <CalcButton value={9} onClick={() => applySelectedNumber(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeSelectedOper("+")} />
              <CalcButton value={"*"} onClick={() => changeSelectedOper("*")} />
              <CalcButton value={"-"} onClick={() => changeSelectedOper("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearCalcDisplay()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
