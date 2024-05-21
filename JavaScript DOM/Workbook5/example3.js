let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];
function displayKid(arrayElement) {
  console.log(
    arrayElement.first.toUpperCase() + " " + arrayElement.last.toUpperCase()
  );
}
kids.forEach(displayKid);

function displayAmountOfCharacters(arrayElement) {
  let myName = arrayElement.first;
  console.log(`${myName} has ${myName.length} characters`);
}

kids.forEach(displayAmountOfCharacters);
