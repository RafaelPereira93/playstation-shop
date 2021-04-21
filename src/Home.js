import React from "react";
// import { Link } from "react-router-dom";
import { GlobalContext } from "./context/contextProvider";
import TitleAndCartHome from "./components/TitleAndCartHome";
import HomeProducts from "./components/HomeProducts";

const Home = () => {
  const { cart, setCart } = React.useContext(GlobalContext);

  return (
    <>
      <TitleAndCartHome />
      <HomeProducts></HomeProducts>
    </>
  );
};

export default Home;
