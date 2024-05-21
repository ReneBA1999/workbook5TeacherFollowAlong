"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   

let items2 = products.filter(item2 => item2.product >= "M&Ms"); 
for (let i = 0; i < items2.length; i++) {
 console.log(items2[i]);
}

let candiesWithMM = products.filter(product => product.product.includes("M&M"));

console.log("Candies with 'M&M' in their name:", candiesWithMM);

let carriesSwedishFish = products.some(product => product.product === "Swedish Fish");

if (carriesSwedishFish) {
    console.log("Yes, we carry Swedish Fish.");
} else {
    console.log("No, we do not carry Swedish Fish.");
}
