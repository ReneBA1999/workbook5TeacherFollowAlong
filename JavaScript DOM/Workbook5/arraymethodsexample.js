let cart = [
  {
    item: "Bread",
    price: 3.29,
    quantity: 2,
  },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

//Map function wil iterate over each element in the array, pass the array element into the function and it will return an new arraylist.
let itemList = cart.map(GetItemName);

function GetItemName(_cartItem) {
  return _cartItem.item;
}

//console.log(itemList);

function displayItemName(_cartItem) {
  console.log(_cartItem);
}
itemList.forEach(displayItemName);

// let namesList = kids.map(buildFullName);
// namesList.forEach(displayName);

//Exercise 1b

function getTotalSum(price, _cartItem) {
  return price + _cartItem.price * _cartItem.quantity;
}
let sum = cart.reduce(getTotalSum, 0);
console.log(sum);
// sum contains 299.94
//What is the reduce... Reduce a list of items to 1 calculated value

function addToCart() {
  let myQuantity = document.getElementById("myQuantity").value;
  let BreadPrice = cart[0].price;
  let totalprice = BreadPrice * myQuantity;
  document.getElementById("totalprice").innerHTML = DisplayPrice(totalprice);
}

let myShoppinglist = [];

function addToCart2() {
  let myCartItem = {
    item: "Bread",
    quantity: document.getElementById("myQuantity").value,
    price: 3.29,
  };
  myShoppinglist.push(myCartItem);

  let totalprice = myShoppinglist.reduce(getTotalSum, 0);
  console.log(myShoppinglist);

  document.getElementById("totalprice").innerHTML = DisplayPrice(totalprice);
}

function DisplayPrice(_price) {
  return `$${_price.toFixed(2)}`;
}
