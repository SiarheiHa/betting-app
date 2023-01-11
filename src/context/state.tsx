import React, { createContext, useReducer } from 'react';
import { ContextType, FetchStatus, State } from 'types';
import { reducer } from './reducer';

const initialState: State = {
  oddItems: [],
  status: FetchStatus.FULFILLED,
};

const initialContext: ContextType = {
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
};

export const Context = createContext<ContextType>(initialContext);

export const AppState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
