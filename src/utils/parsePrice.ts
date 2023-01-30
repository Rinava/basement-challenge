const parsePrice = (price: string | number) =>
  `$${parseFloat(price as string)
    .toFixed(2)
    .toString()
    .replace(".", ",")}`;

export default parsePrice;
