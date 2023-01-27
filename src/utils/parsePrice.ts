const parsePrice = (price: string) => `$${price.toString().replace(".", ",")}`;

export default parsePrice;
