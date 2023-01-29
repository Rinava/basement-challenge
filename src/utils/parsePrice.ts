const parsePrice = (price: string | number) => `$${price.toString().replace(".", ",")}`;

export default parsePrice;
