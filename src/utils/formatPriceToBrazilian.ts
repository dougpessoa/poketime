const formatPriceToBrazilian = (price: number): String => {
  const currency = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return currency;
}

export default formatPriceToBrazilian;