//How to Find Elements in an Array in JavaScript
// An array is a collection of values that can be of any data type

let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];
//Find all the customer where the customer has a credit score above 20
let findFirstCustomer = customers.find((customer) => customer.credit > 50);

if (findFirstCustomer == undefined) {
  console.log("No customer found");
} else {
  console.log(findFirstCustomer);
}

let customersFound = customers.filter((customer) => customer.credit > 50);
console.log(customersFound);
// const app = document.querySelector("#app");

// items.forEach((item) => {
//   app.innerHTML += `
//     <li>
//       ${item.id} ${item.name} - ${(item.price / 100).toFixed(2)}
//     </li>
//   `;
// });

const myButton = document.getElementById("myButton");
mybutton.onclick(() => {
  let message = "Hello World";
  alert(message);
});
