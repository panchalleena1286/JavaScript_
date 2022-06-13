// D = (L-S)/L * 100

//a + ((b * c)/d) * e

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

//console.log("Discount Percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log("Discount Percentage is :" + displayDiscountPercentage + "% off");