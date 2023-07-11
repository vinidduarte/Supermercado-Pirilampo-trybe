const stockProducts = require('./data.json');

const searchProductsByBrand = (brandName) => {
  const productBrand = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (brandName === stockProducts[index].brand) {
      productBrand.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
      });
    }
  }
  return productBrand;
};

module.exports = { searchProductsByBrand };
