const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let vitaminsItems = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].vitamins) {
      let vitaminsInformation = [];
      let vitaminsArray = Object.keys(stockProducts[index].vitamins);

      for (let indexVi = 0; indexVi < vitaminsArray.length; indexVi += 1) {
        vitaminsInformation.push(`${vitaminsArray[indexVi]} - ${stockProducts[index]
          .vitamins.vitaminsArray[indexVi]}`);
      }
      vitaminsItems.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation,
      });
    }
  } return vitaminsItems;
};

module.exports = { getProductsRichInVitamin };
