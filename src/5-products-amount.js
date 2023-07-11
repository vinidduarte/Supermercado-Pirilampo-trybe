const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let soma = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    soma = stockProducts[index].quantityInStock + soma;
  }
  return soma;
};

module.exports = { getProductsAmount };
