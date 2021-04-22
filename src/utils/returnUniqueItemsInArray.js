const returnUniqueItemsInArray = (arrayOfProducts) => {
  const filteredArray = arrayOfProducts.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return filteredArray;
};

export default returnUniqueItemsInArray;
