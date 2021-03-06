import { createContext } from 'react';
import { AppState, Actions, initialAppState } from '../reducers';

type ContextState = {
  state: AppState;
  dispatch(action: Actions): void;
};

const Context = createContext<ContextState>({
  state: initialAppState,
  dispatch(_) {
    console.warn('Context.Provider 以外からの呼び出しです。')
  }
});

export default Context;
