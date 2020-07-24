const formatPriceToBrazilian = (price: number): String => {
  const brPrice = price.toFixed(2).replace(".", ",").toString();
  return brPrice;
}

export default formatPriceToBrazilian;