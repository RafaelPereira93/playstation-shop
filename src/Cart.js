import React from "react";
import TitleAndCartHome from "./components/TitleAndCartHome";
import { GlobalContext } from "./context/contextProvider";
import CartComponent from "./components/Cart";

const Cart = () => {
  const { cart } = React.useContext(GlobalContext);

  return (
    <>
      <TitleAndCartHome />
      <CartComponent />
    </>
  );
};

export default Cart;
