const removeItemInCart = (cart, productId) => {
  const filteredCart = cart.filter((item) => {
    return item.id !== productId;
  });
  return filteredCart;
};

export default removeItemInCart;
