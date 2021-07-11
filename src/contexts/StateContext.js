import { createContext, useContext, useReducer } from "react";

import ThemeReducer from "../reducers/ThemeReducer";
import UserReducer from "../reducers/UserReducer";

const initialState = {
  theme: ThemeReducer(), //ao executar a função ThemeReducer, ela nos devolve o state atual
  user: UserReducer(), //ao executar a função UserReducer, ela nos devolve o state atual
};

const CombineReducer = (state, action) => ({
  theme: ThemeReducer(state.theme, action),
  user: UserReducer(state.user, action),
});

//Criando a combinação do Reducer
export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  /*O hook useReducer recebe o reducer e o initialState retorna um array [state, dispatch]*/
  <StateContext.Provider value={useReducer(CombineReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
