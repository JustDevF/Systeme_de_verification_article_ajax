//Système de vérification d'article
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
//La fonction prend un tableau représentant une commande et renvoie une promesse asynchrone
const checkInventory = (order) => {
  //Promesse prend deux fonctions callback
  return new Promise((resolve, reject) => {
    //asynchrone prend deux paramètre
    setTimeout(() => {
      //Si chaque article de la commande est en stock, cette promesse se résout avec la valeur "Thank you. Your order was successful."
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      //Sinon, la promesse rejette avec la valeur "We're sorry. Your order could not be completed because some items are sold out".
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};
//exporter la fonction checkInventory  
module.exports = { checkInventory };