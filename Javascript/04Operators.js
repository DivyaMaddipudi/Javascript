var costPrice = 10000;
var sellingPrice = 1999;

var priceDiscount;

priceDiscount = (costPrice - sellingPrice)/costPrice * 100;
console.log("Discount is: ", priceDiscount, "% off");

var accuratePriceDiscount = Math.round(priceDiscount);
console.log(accuratePriceDiscount, "% off");