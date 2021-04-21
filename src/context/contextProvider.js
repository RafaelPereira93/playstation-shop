import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [productAlreadyInCart, setProductAlreadyInCart] = React.useState([]);

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, productAlreadyInCart, setProductAlreadyInCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
