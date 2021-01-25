import React, { useContext } from "react";

import NumberButton from './components/NumberButton';
import OperatorButton from './components/OperatorButton';
import Result from './components/Result';
import Context from './components/Context';
import {
  onClearClick,
  onEqualClick,
  onDivideClick,
  onMultiplyClick,
  onPlusClick,
  onMinusClick
} from "./reducers";

import './Calculator.css';

const CalculatorBoard: React.FC = () => {
  const { state } = useContext(Context)

  return (
    <>
      <div className='result'>
        <Result
          result={state.showingResult ? state.resultValue : state.inputValue}
        />
      </div>
      <div className="wrapper">
        <div className="number">
          <div className="numUpper">
            <NumberButton n={7} />
            <NumberButton n={8} />
            <NumberButton n={9} />
          </div>
          <div className="numMiddle">
            <NumberButton n={4} />
            <NumberButton n={5} />
            <NumberButton n={6} />
          </div>
          <div className="numLower">
            <NumberButton n={1} />
            <NumberButton n={2} />
            <NumberButton n={3} />
          </div>
          <div className="zero">
            <NumberButton n={0} />
            <span className="allClear">
              <OperatorButton o={"AC"} action={onClearClick()} />
            </span>
            <span className="equal">
              <OperatorButton o={"="} action={onEqualClick()} />
            </span>
          </div>
        </div>
        <div className="operator">
          <OperatorButton o={"÷"} action={onDivideClick()} />
          <OperatorButton o={"×"} action={onMultiplyClick()} />
          <OperatorButton o={"-"} action={onMinusClick()} />
          <OperatorButton o={"+"} action={onPlusClick()} />
        </div>
      </div>
    </>
  );
};

export default CalculatorBoard;
