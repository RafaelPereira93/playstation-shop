import React from "react";
import * as styles from "./HomeProductsStyles";
import Nav from "../Nav";
import DataProject from "../../data-project";
import { GlobalContext } from "../../context/contextProvider";
import verifyIsProductExistsInCart from "../../utils/verifyIfProductExistsInCart";

const Product = ({
  data,
  cart,
  setCart,
  productAlreadyInCart,
  setProductAlreadyInCart,
}) => {
  const handleCart = () => {
    const ifProductExistsInCart = verifyIsProductExistsInCart(cart, data.id);

    if (ifProductExistsInCart.length) {
      return;
    }

    setCart([...cart, data]);
  };

  return (
    <>
      <styles.WrapperProduct data-js={data.id}>
        <styles.WrapperImageProduct>
          <img src={data.image} alt="" />
        </styles.WrapperImageProduct>
        <styles.WrapperPriceAndAddToCart>
          <styles.AddToCart onClick={handleCart}>Add to cart</styles.AddToCart>
          <styles.Price>${data.price}</styles.Price>
        </styles.WrapperPriceAndAddToCart>
      </styles.WrapperProduct>
    </>
  );
};

const HomeProducts = () => {
  const [currentTab, setCurrentTab] = React.useState("games");
  const {
    cart,
    setCart,
    productAlreadyInCart,
    setProductAlreadyInCart,
  } = React.useContext(GlobalContext);

  return (
    <>
      <Nav setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <styles.WrapperProducts>
        {DataProject[currentTab].data.map((data) => (
          <Product
            data={data}
            key={data.id}
            setCart={setCart}
            cart={cart}
            setProductAlreadyInCart={setProductAlreadyInCart}
            productAlreadyInCart={productAlreadyInCart}
          />
        ))}
      </styles.WrapperProducts>
    </>
  );
};

export default HomeProducts;
