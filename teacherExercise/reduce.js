"use strict"

// Use the reduce method to sum the prices of all purchased options
// The reduce method applies the getTotalCost function on each element of the purchasedOptions array
// Starting with an initial value of 0
// let totalCost = nameOfArrayOfObjects.reduce(getTotalCost, startingvalue)

let totalShoppingCartCost = purchasedOptions.reduce(getTotalCost, 0);
let discount = 5;

let totalwithdiscount = totalShoppingCartCost - discount; 

// sum contains 1917.99, which is the total cost of all purchased options
console.log(totalShoppingCartCost);


//    let sum = ticketPackage.reduce(getTotalCost, 0);
//    console.log(sum);

let ticketPackage = [
    {ticketType: "Senior", price: 49.99, numTickets: 1, discount: 5},
    {ticketType: "Adult", price: 79.99, numTickets: 2, discount: 3},
    {ticketType: "Child", price: 29.99, numTickets: 3, discount: 10}
   ];
  
   let sum = ticketPackage.reduce((currentTotal, currentValue) => {
    return currentTotal + (currentValue.price - currentValue.discount) * currentValue.numTickets;
  }, 0);
  
  console.log(sum);