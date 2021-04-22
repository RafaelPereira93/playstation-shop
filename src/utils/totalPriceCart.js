const totalPriceCart = (cartArray) => {
  const totalCart = cartArray.reduce((acc, cartItem) => {
    acc += cartItem.quantity * cartItem.price;
    return acc;
  }, 0);
  return totalCart;
};

export default totalPriceCart;
