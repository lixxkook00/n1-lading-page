import React, { useContext, useReducer } from "react";
import reducer from "../reducer/accountReducer";

const initialState = {
  account: null,
};

const AccountContext = React.createContext();

export const AccountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setCurrentAccount = (address) => {
    dispatch({ type: "SET_CURRENT_ACCOUNT", payload: address });
  };
  return (
    <AccountContext.Provider value={{ ...state, setCurrentAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AccountContext);
};
