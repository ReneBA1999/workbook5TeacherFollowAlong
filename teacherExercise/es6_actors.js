"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   let actor187 = academyMembers.find(member => member.memID == 187);

if (actor187){console.log(`academy member with id 187 is ${actor187.name}`)};

//  Who has been in at least 3 films?

let actor3Films = academyMembers.filter(member => member.films.length >= 3);
// if (actor3Films){console.log(`academy member with 3 films is ${actor3Films.name}`)};

//GPT solution
console.log("Members who have been in at least 3 films:");
actor3Films.forEach(member => console.log(member.name));

//Who has a name that starts with "Bob"?
                                                       //mising
let bobName = academyMembers.filter(bob => bob.name.startsWith ("Bob"));

console.log("Members whose name start with Bob:");
bobName.forEach(bob => console.log(bob.name));

//Gpt solution 
// let membersWithBobName = academyMembers.filter(member => member.name.startsWith("Bob"));

// console.log("Members whose name starts with 'Bob':");
// membersWithBobName.forEach(member => console.log(member.name));
