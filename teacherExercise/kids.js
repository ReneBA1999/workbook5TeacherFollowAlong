"use strict"

let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];

    //Array of objects = a list of object 
  // Parameter will pass in 1 object at a time kids.forEach(passInTheFirstObjectOfTheArrayOfObjects)
  //arrayname.forEach(functioname) When you call a forEach function, it should always have a parametername that represents 1 object
//   kids.forEach(displayFirstAndLastname)

//   function displayFirstAndLastname(_akid) {
//     console.log(`the kids names are ${_akid.first} ${_akid.last}`)
//   }

// function sentenceRene(kids){
//     console.log(`the kids names are ${kids.first} ${kids.last}`)
//   };

//   kids.forEach(sentenceRene);
//   //arrayname.forEach(functioname

//   function fullname(_firstname, _lastname) {
//     return _firstname + " " + _lastname;
//   }

//  let fullnamestored = fullname("Rene","Banuelos");
// console.log(fullnamestored);


function names(array) {
    return array.first ;
   }

   function displayName(array) {
    console.log(array);
   }
   
  let firstNames = kids.map(names);
 firstNames.forEach(displayName);
