const stockProducts = require('./data.json');


const searchProductByName = (name) => {
  let formattedPrice = "";
  let newObject = {};
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (name === stockProducts[index].productName) {

      newObject = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`
      }
      return newObject;
    }

  }
  return null;

}

module.exports = { searchProductByName };
