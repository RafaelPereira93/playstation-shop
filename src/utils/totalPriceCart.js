const totalPriceCart = (cartArray, promoCodeMessage = "") => {
  console.log(promoCodeMessage);

  const totalCart = cartArray.reduce((acc, cartItem) => {
    acc += cartItem.quantity * cartItem.price;
    return acc;
  }, 0);

  if (promoCodeMessage === "Valid code") {
    return (totalCart * 0.9).toFixed(2);
  }

  return totalCart;
};

export default totalPriceCart;
