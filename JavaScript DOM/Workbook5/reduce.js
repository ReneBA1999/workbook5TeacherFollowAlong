let kids = [
  { first : "Natalie", last : "Plyers" }, // Object
   { first: "Brittany", last: "Ray" }, // Object
   { first: "Zachary", last: "Westly" } // Object
  ];
  //Array of objects = a list of object 
  // Parameter will pass in 1 object at a time kids.forEach(passInTheFirstObjectOfTheArrayOfObjects)
  //arrayname.forEach(functioname) When you call a forEach function, it should always have a parametername that represents 1 object
  kids.forEach(displayFirstAndLastname)


  function buildFullName(arrayElement) {
    return arrayElement.first + " " + arrayElement.last;
   }
  let namesList = kids.map(buildFullName);
  namesList.forEach(displayName);

  



function displayName(arrayElement) {
 console.log(arrayElement);
}


//map is like a forEach, it returns a new array



  function fullname(_firstname, _lastname) {
    return _firstname + " " + _lastname;
  }

 let fullnamestored = fullname("Leslie","Alvarado");
console.log(fullnamestored);


  
  let kid = {
    first: "Nathalie",
    last: "Test"
  }
  // kids.forEach(kid => {
  //   console.log(kid.first + " " + kid.last);
  // })




  function sentenceRene(kids){
    console.log(`the kids names are ${kids.first} ${kids.last}`)
  }
  kids.forEach(sentenceRene);

  function sentence( kid1){
    console.log(`The first name is ${kid1.first}  and the last name is ${kid1.last}`);
  }
  kids.forEach(sentence);

  //The benefit of a seperate function is that you can have multiple versions and let the for each call that seperate function

  function Backwards(akid) {
    console.log(akid.last+ " " + akid.first);
   }

  function displayKid(akid) {
   console.log(akid.first + " " + akid.last);
  }
  kids.forEach(displayKid);
  kids.forEach(Backwards);


  


function newsentence(allKid){
  console.log(`Fir`)  
}








function sentence(kids){
  consol
el
}

function kidsSentencce(){
  console.log(`${kid.first}${kid.last}`)
}


// Array of objects representing purchased options with their prices
let purchasedOptions = [
  { item: "A/C", price: 1019.0 },
  { item: "Sunroof", price: 699.99 },
  { item: "AM/FM Stereo w/ cassette player", price: 199.0 },
];

// Function to calculate the total cost by adding the price of each array element to the current total
function getTotalCost(currentTotal, arrayElement) {
  return currentTotal + arrayElement.price;
}

// Use the reduce method to sum the prices of all purchased options
// The reduce method applies the getTotalCost function on each element of the purchasedOptions array
// Starting with an initial value of 0
let sum = purchasedOptions.reduce(getTotalCost, 0);

// sum contains 1917.99, which is the total cost of all purchased options
console.log(sum);
