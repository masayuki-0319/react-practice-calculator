import React, {useReducer} from 'react';
import './App.css';

import CalculatorBoard from './CalculatorBoard';
import Context from "./components/Context";
import { initialAppState, reducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <div className="App">
      <div>
        <Context.Provider value={{ state, dispatch }}>
          <CalculatorBoard />
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
