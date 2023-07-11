const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productAl = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    let allergyMessage = 'Pode conter:';
    if (stockProducts[index].allergyOrIntolerance) {
      for (let indexAl = 0; indexAl < stockProducts[index].allergyOrIntolerance.length;
        indexAl += 1) {
        allergyMessage = `${allergyMessage} ${stockProducts[index].allergyOrIntolerance[indexAl]}`;
      }
      productAl.push({ description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        allergyOrIntoleranceMessage: allergyMessage,
      });
    } else {
      productAl.push({ description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
      });
    }
  } return productAl;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
