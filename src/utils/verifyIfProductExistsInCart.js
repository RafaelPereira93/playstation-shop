const verifyIsProductExistsInCart = (cart, productID) => {
  const filteredCart = cart.filter((item) => {
    return item.id === productID;
  });
  return filteredCart;
};

export default verifyIsProductExistsInCart;
