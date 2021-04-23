import React from "react";
import * as styles from "./CartStyles";
import { GlobalContext } from "../../context/contextProvider";
import returnUniqueItemsInArray from "../../utils/returnUniqueItemsInArray";
import totalPriceCart from "../../utils/totalPriceCart";
import removeItemInCart from "../../utils/removeItemInCart";
import { Link } from "react-router-dom";
import BackToHomeImage from "../../images/back.svg";
import promoCode from "../../utils/promoCode";

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

  const removeItem = ({ target }) => {
    const productId = target.dataset.productId;
    const cartUpdated = removeItemInCart(cart, productId);
    setCart(cartUpdated);
  };

  return (
    <>
      <styles.WrapperItem>
        <styles.WrapperProductImage>
          <styles.WrapperContentImage>
            <img src={product.image} alt={product.name} />
            <styles.ProductName>{product.name}</styles.ProductName>
            <styles.RemoveProduct
              onClick={removeItem}
              data-product-id={product.id}
            >
              Remove
            </styles.RemoveProduct>
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
  const [promoCodeUser, setPromoCodeUser] = React.useState("");
  const [messagePromoCode, setMessagePromoCode] = React.useState("");
  const { cart } = React.useContext(GlobalContext);

  const handlePromoCode = () => {
    const isValidCode = promoCode(promoCodeUser);
    setMessagePromoCode(isValidCode);
  };

  return (
    <>
      {cart.length ? (
        <styles.WrapperCart>
          <styles.WrapperAddedItens>
            {cart &&
              cart.map((product) => (
                <>
                  <HeaderTitleProducts />
                  <ItemInCart key={product.id} product={product} />
                </>
              ))}
            <styles.ContinueShopping>
              <Link to="/">
                <img src={BackToHomeImage} alt="" /> Continue shopping
              </Link>
            </styles.ContinueShopping>
          </styles.WrapperAddedItens>
          <styles.WrapperTotalCart>
            <styles.WrapperTitleSummary>
              Order summary
            </styles.WrapperTitleSummary>
            <styles.HeaderItemsCountAndTotalPrice>
              <styles.ItemsLength>Items {cart.length}</styles.ItemsLength>
              <styles.ItemPrice>$ {totalPriceCart(cart)}</styles.ItemPrice>
            </styles.HeaderItemsCountAndTotalPrice>
            <styles.PromoCode>
              <styles.TitlePromoCode>Promo Code</styles.TitlePromoCode>
              <styles.InputPromo
                type="text"
                onChange={(e) => setPromoCodeUser(e.target.value)}
                disabled={messagePromoCode === "Valid code"}
              />
              {messagePromoCode && (
                <styles.PromoCodeText messagePromoCode={messagePromoCode}>
                  {messagePromoCode}
                </styles.PromoCodeText>
              )}
              <styles.PromoCodeButton onClick={handlePromoCode}>
                Apply
              </styles.PromoCodeButton>
            </styles.PromoCode>
            <styles.WrapperTotalAndCheckout>
              <styles.WrapperTotalCost>
                <styles.TextTotalCost>Total Cost</styles.TextTotalCost>
                <styles.TotalCost>
                  $ {totalPriceCart(cart, messagePromoCode)}
                </styles.TotalCost>
              </styles.WrapperTotalCost>
              <styles.ButtonTotalCost>Checkout</styles.ButtonTotalCost>
            </styles.WrapperTotalAndCheckout>
          </styles.WrapperTotalCart>
        </styles.WrapperCart>
      ) : (
        <styles.NoItemsInCart>
          There are no items in your cart.
        </styles.NoItemsInCart>
      )}
    </>
  );
};

export default CartComponent;
