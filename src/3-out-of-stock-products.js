const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const listoutstock = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      listoutstock.push(stockProducts[index].productName);
    }
  }
  return listoutstock;
};

module.exports = { getOutOfStockProducts };
