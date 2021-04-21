import React from "react";
import * as styles from "./TitleHomeStyles";
import LogoGaming from "../../images/logo-gaming.svg";
import CartLogo from "../../images/cart-logo.svg";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/contextProvider";

const TitleAndCartHome = () => {
  const { cart } = React.useContext(GlobalContext);

  return (
    <>
      <styles.WrapperTitleHome>
        <Link to="/">
          <styles.WrapperTitleAndCart>
            <styles.TitleHome>My Playstation Shop</styles.TitleHome>
            <styles.ImageLogoGaming src={LogoGaming} alt="Logo Gaming" />
          </styles.WrapperTitleAndCart>
        </Link>
        <styles.WrapperCart>
          <p>Cart</p>
          <Link to="/cart">
            <styles.WrapperCartImage cart={cart}>
              <styles.ImageCart src={CartLogo} alt="Image Cart Logo" />
            </styles.WrapperCartImage>
          </Link>
        </styles.WrapperCart>
      </styles.WrapperTitleHome>
    </>
  );
};

export default TitleAndCartHome;
