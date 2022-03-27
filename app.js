//inclure la fonction checkInventory()de library.js 
//checkInventory prend un tableau représentant une commande et renvoie une promesse
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 2000], ['bags', 2]];

//Fonction de rappel gestionnaire de réussite
const handleSuccess = (sucess) =>{
  console.log(sucess);
}
//Fonction de rappel gestionnaire d'échec
const handleFailure = (failled) =>{
  console.log(failled);
}
//Invoquer checkInventory() avec order
//Attachez la fonction then()
const prom = checkInventory(order).then(handleSuccess, handleFailure);
//exécuter sur node 

