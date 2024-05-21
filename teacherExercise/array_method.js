"use strict"

let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];
   
//    let firstNames = kids.map(names);
//    firstNames.forEach(displayName);
  
   

//    let cartItems = cart.map(cartItem => cartItem.item);
  
//    function Foodnames(arrayElement){
//     return arrayElement.item
// }
// function DisplaytheFood(arrayElement){
//     console.log(arrayElement)
// }
// const CartList = cart.map(Foodnames);
// CartList.forEach(DisplaytheFood)

// let cartItems = cart.map(cartItem => cartItem.item);
// console.log(cartItems);

// function totalCost(){
//     return cart.reduce((total, {price, quantity}) => total + price*quantity, 0)
//  }
//  let sum = cart.reduce(totalCost, 0);
//  console.log(sum);

//  function totalCost(total, { price, quantity }) {
//     return total + price * quantity;
// }

// let sum = cart.reduce(totalCost, 0);
// console.log(sum);

// function sortItems(a, b) {
//     if (a < b) return -1; // right order
//     else if (a == b) return 0; // same values
//     else return 1; // swap, wrong order
// }
// cart.sort(sortItems);

// let numItems = cart.length;
// for(let i = 0; i < numItems; i++){
//     console.log(cart[i]);
// }

// let kids = ["Natalie", "Brittany", "Zachary"];
// kids.sort(); // Sorts the array
// let numKids = kids.length;
// for(let i = 0; i < numKids; i++) {
//  console.log(kids[i]);
// }
// cart.sort((a, b) => a.quantity - b.quantity);
//         console.log(cart);
        
      

        cart.sort((a, b) => a.item.localeCompare(b.item));

console.log(cart)