"use strict"
//using the forEach
let colors = ["Red", "White", "Blue"]
colors.forEach((item) => {
 console.log(item);
});

//If you have an HTML collectiong you must call Array.from() on the collection before using thhe for each
//Example

const msgDivs = document.querySelectorAll(".msgDiv");
Array.from(msgDivs).forEach(function (element) {
 element.style.border = "2px solid red";
});

