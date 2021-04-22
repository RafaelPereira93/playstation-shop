import React from "react";
import * as styles from "./CartStyles";
import { GlobalContext } from "../../context/contextProvider";
import returnUniqueItemsInArray from "../../utils/returnUniqueItemsInArray";

const HeaderTitleProducts = () => {
  return (
    <styles.HeaderTitleProducts>
      <styles.HeadTitle>Product Details</styles.HeadTitle>
      <styles.HeadTitle align="center">Quantity</styles.HeadTitle>
      <styles.HeadTitle align="center">Price</styles.HeadTitle>
      <styles.HeadTitle align="center">Total</styles.HeadTitle>
    </styles.HeaderTitleProducts>
  );
};

const ItemInCart = ({ product }) => {
  const { cart, setCart } = React.useContext(GlobalContext);

  const addProductQuantity = () => {
    const productsUpdated = returnUniqueItemsInArray([
      ...cart,
      { ...product, quantity: product.quantity++ },
    ]);
    setCart(productsUpdated);
  };

  const removeProductQuantity = () => {
    if (product.quantity <= 1) {
      return;
    }

    const productsUpdated = returnUniqueItemsInArray([
      ...cart,
      { ...product, quantity: product.quantity-- },
    ]);
    setCart(productsUpdated);
  };

  return (
    <>
      <styles.WrapperItem>
        <styles.WrapperProductImage>
          <styles.WrapperContentImage>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <span>Remove</span>
          </styles.WrapperContentImage>
        </styles.WrapperProductImage>

        <styles.WrapperQuantity>
          <styles.WrapperContentQuantity>
            <button onClick={removeProductQuantity} data-quantity="-">
              -
            </button>
            <span>{product.quantity}</span>
            <button onClick={addProductQuantity} data-quantity="+">
              +
            </button>
          </styles.WrapperContentQuantity>
        </styles.WrapperQuantity>

        <styles.WrapperPrice>
          <styles.WrapperContentPrice>
            <p>$ {product.price}</p>
          </styles.WrapperContentPrice>
        </styles.WrapperPrice>

        <styles.WrapperTotal>
          <styles.WrapperContentTotal>
            <p>$ {product.price * product.quantity}</p>
          </styles.WrapperContentTotal>
        </styles.WrapperTotal>
      </styles.WrapperItem>
    </>
  );
};

const CartComponent = () => {
  const { cart } = React.useContext(GlobalContext);

  return (
    <>
      <styles.WrapperCart>
        <styles.WrapperAddedItens>
          <HeaderTitleProducts />
          {cart &&
            cart.map((product) => (
              <ItemInCart key={product.id} product={product} />
            ))}
        </styles.WrapperAddedItens>
        <styles.WrapperTotalCart>
          <styles.WrapperTitleSummary>Order summary</styles.WrapperTitleSummary>
          <styles.HeaderItemsCountAndTotalPrice>
            <h3>Items 3</h3>
            <h3>$ 230.00</h3>
          </styles.HeaderItemsCountAndTotalPrice>
          <styles.PromoCode>
            <styles.TitlePromoCode>Promo Code</styles.TitlePromoCode>
            <input type="text" />
            <button>Apply</button>
          </styles.PromoCode>
          <styles.WrapperTotalAndCheckout>
            <styles.WrapperTotalCost>
              <h3>Total Cost</h3>
              <h3>$ 270.00</h3>
            </styles.WrapperTotalCost>
            <button>Checkout</button>
          </styles.WrapperTotalAndCheckout>
        </styles.WrapperTotalCart>
      </styles.WrapperCart>
    </>
  );
};

export default CartComponent;
