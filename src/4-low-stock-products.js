const stockProducts = require('./data.json');

const message = [];
const getLowStockProducts = () => {
  for ( let index = 0; index < stockProducts.length; index += 1){
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
    
      message.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`);
  
    }
    
  }
  return message ;

};
getLowStockProducts();

module.exports = { getLowStockProducts };
