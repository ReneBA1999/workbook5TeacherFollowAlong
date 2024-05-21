let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];
function buildFullName(arrayElement) {
  return arrayElement.first + " " + arrayElement.last;
}

//Map if you are going to return values into a new list.
//For each if you are gonna change the output for each element of the list.

function displayName(arrayElement) {
  console.log(arrayElement);
}
let namesList = kids.map(buildFullName);
namesList.forEach(displayName);
