let shoppingList = ['carrot', 'beetroot', 'milk', 'mango', 'apple'];

let shoppingBasket = shoppingList.copyWithin(0, shoppingList.length);

shoppingBasket.push('orange');
shoppingBasket.push('lemon');
console.log(shoppingBasket);