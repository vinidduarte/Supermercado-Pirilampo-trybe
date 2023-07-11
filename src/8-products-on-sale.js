const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productOnSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      productOnSale.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        onSale: stockProducts[index].onSale,
      });
    }
  }
  return productOnSale;
};

module.exports = { getProductsOnSale };
