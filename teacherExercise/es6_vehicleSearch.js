"use strict"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ];
   
   // Which vehicles are RED?

// let redVehicles = vehicles.filter(colorRed => colorRed.color == "Red");
// // if (redVehicles){console.log(`vehicles with color red are ${redVehicles.name}`)};
// if (redVehicles.length > 0) {
//     console.log("Vehicles with color red are:");
//     redVehicles.forEach(vehicle => console.log(vehicle.type));
// } else {
//     console.log("No vehicles found with color red.");
// }

// //GPT SOLUTION
// let redVehicles = vehicles.filter(vehicle => vehicle.color === "Red");
// if (redVehicles.length > 0) {
//     console.log("Vehicles with color red are:");
//     redVehicles.forEach(vehicle => console.log(vehicle.licenseNo));
// } else {
//     console.log("No vehicles found with color red.");
// }

// Which vehicles have registrations that are expired?
let expiredTags = vehicles.filter(expTags => expTags.registrationExpires <= new Date)
  if (expiredTags.length > 0){
     console.log("Vehicles with expired tags:");
     expiredTags.forEach(expTags => {console.log(`vehicle: ${expTags.type} ${expTags.licenseNo} has a registration experation pending of: ${expTags.registrationExpires}`)});
  }
  else{
    console.log("cars tags are up to date");
  }



// // Find vehicles with expired registrations
// let currentDate = new Date();

// // Find vehicles with expired registrations
// let expiredVehicles = vehicles.filter(vehicle => vehicle.registrationExpires < currentDate);

// // Display the details of vehicles with expired registrations
// if (expiredVehicles.length > 0) {
//     console.log("Vehicles with expired registrations:");
//     expiredVehicles.forEach(vehicle => {
//         console.log(`License No: ${vehicle.licenseNo}, Registration Expiry Date: ${vehicle.registrationExpires.toDateString()}`);
//     });
// } else {
//     console.log("No vehicles with expired registrations found.");
// }

// Which vehicles that hold at least 6 people?
// let sixRoomCapacity = vehicles.find(roomFor6 => roomFor6.capacity >= 6);
//  if (sixRoomCapacity)console.log(`the capcity of this vehicle ${sixRoomCapacity.licenseNo} meets the 6 person capacity`);

 let sixRoomCapacity = vehicles.filter(roomFor6 => roomFor6.capacity >= 6);
 if (sixRoomCapacity.length > 0){
    console.log("Vehicles with six person or more capacity space:");
    sixRoomCapacity.forEach(roomFor6 => {
        console.log(`The ${roomFor6.type}: ${roomFor6.licenseNo} vehicle has a capcity space for 6 or more people.`)
    } )
 };
// Which vehicles have license plates that end with "222"?
 let licPlate222 = vehicles.filter(end222 => end222.licenseNo.endsWith("222") );

 if (licPlate222.length > 0){
    console.log("Vehicles license plates that end in 222");
    licPlate222.forEach(end222 => {
        console.log(`the vehicles ${end222.licenseNo}'s registration plate ends in 222`)
    })
 };