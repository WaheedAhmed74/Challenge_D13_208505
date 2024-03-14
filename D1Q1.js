"use strict";
/* My name is "Waheed Ahmed"
My Email Addres is "waheedahmedsoomro@gmail.com"
My Roll No. is (00208505)
*/
Object.defineProperty(exports, "__esModule", { value: true });
// // Challenge : Day 1 (Question 2)
// create a name in a variable
// let name1: string = "Waheed"
// console.log("Hellow Mr. "+name1+ " Would You like to learn some Typescript Today")
// console.log("Hellow Mr."+ " " + name1 + " " + "Would You like to learn some Typescript Today")
// // Challenge : Day 1 (Question 3)
// create a name in a variable
// let myname : string = "wAheEd aHmEd sOomRO"
// console.log(" My Name in Orignal Text " + myname)
// console.log(" My Name in LowerCase Text " + myname.toLowerCase())
// console.log(" My Name in UpperCase Text " + myname.toUpperCase())
// this Line learn from Internet but still no idea how it works (Title Case)
// console.log("My Nam in TitleCase Text " + myname.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase()))
// // Challenge : Day 2 (Question 1)
// console.log(`"Albert Einstein once said, "A person who never made a mistake never tried anything new.""`)
// // Challenge : Day 2 (Question 2)
// let famous_person : string = "Albert Einstein";
// let message : string = "A person who never made a mistake never tried anything new.";
// console.log(`"${famous_person} once said, "${message}""`)
// // Challenge : Day 2 (Question 3)
// let stripping_name : string = "     Waheed   \t    \n"
// console.log (stripping_name)
// console.log (stripping_name.trim())
// // Challenge : Day 3 (Question 1)
// console.log(5+3)
// console.log(9-1)
// console.log(4*2)
// console.log(16/2)
// // Challenge : Day 3 (Question 2)
// console.log(`5+3\n7+1\n4+4\n9-1`)
// // Challenge : Day 3 (Question 3)
// var favourite_number : number = 7;
// console.log("Here is my favourite number " + favourite_number)
// // Challenge : Day 4 (Question 1)
// This program is written by Soomro Waheed Ahmed
/* This is Day 4 Challenge Program
    and Question 1 for commenting
    these are multi lines Comments
    This Challenge start on 05 March 2024
*/
// // Challenge : Day 4 (Question 2)
// let names : string[] = ["Waheed", "Qamar", "Raza", "Maqsood", "Adnan"]
// for (let i = 0; i < names.length; i ++){
//     console.log(names[i])
// }
// // Challenge : Day 4 (Question 3)
// let names : string[] = ["Waheed", "Qamar", "Raza", "Maqsood", "Adnan"]
// for (let i = 0; i < names.length; i ++){
//     console.log("Assalam o Alaikum Dear " +names[i] + ", How are You?")
// }
// // Challenge : Day 5 (Question 1)
// let mode_of_transport : string[] = ["Cycle", "MotorCycle", "Motor Car", "Jeep", "Ferrari"]
// for (let i = 0; i < mode_of_transport.length; i ++) {
//     console.log("I would like to go on " + mode_of_transport[i])
// }
// // this is copy from the Challenge Hint
// mode_of_transport.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });
// // Challenge : Day 5 (Question 2)
// let guest_list : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// guest_list.forEach(guest => {
//     console.log(`Dear Mr. ${guest} I would like to invite you on dinner`);
// });
// // Challenge : Day 5 (Question 3)
// let new_guest_list : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// let no_guest = new_guest_list.splice(1,1,"javed")
// console.log(`${no_guest} is unable to attend the dinner Party`)
// new_guest_list.forEach(guest => {
//     console.log(`Dear Mr. ${guest} I would like to invite you on dinner`);
// });
// // Challenge : Day 6 (Question 1)
// let guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// console.log(guests)
// guests.push("Kamran")
// console.log(guests)
// guests.splice(0,1,"Arslan","Waqas","Sohail")
// console.log(guests)
// guests.splice(1,3,"Adnan","Ali","Murtaza")
// console.log(guests)
// guests.forEach(guest => {
//          console.log(`Dear Mr. ${guest} I would like to invite you on dinner`)
// });
// // Challenge : Day 6 (Question 2)
// let new_guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// new_guests.splice(1,3)
// console.log(new_guests)
// new_guests.forEach(guest => {
// console.log(`Due to some time table changed, Now Mr. ${guest} I would like to invite you on dinner Party`)
// });
// // Challenge : Day 6 (Question 3)
// let places : string [] = ["Saudi Arabia", "Germany", "Russia", "Nepal", "China", "Iran"]
// console.log(places) // In Orignal State
// console.log([...places].reverse()) // In Reverse Order
// console.log(places) // In Orignal State
// console.log([...places].sort()) // In Ascending Sort Order
// console.log(places) // In Orignal State
// // Challenge : Day 7 (Question 1)
// let guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// console.log("Orignal Guests are " + guests.length)
// guests.push("Kamran")
// guests.splice(0,1,"Arslan","Waqas","Sohail")
// guests.splice(1,3,"Adnan","Ali","Murtaza")
// console.log("Now the  Guests are " + guests.length)
// // Challenge : Day 7 (Question 2)
// let mountains : string[] = ["K-2", "Himaliya", "QaraQaram", "Mount Averest"]
// let rivers : string[] = ["Indus", "Satlaj", "Ravi", "chanab"]
// let cities : string[] = ["Hyderabad", "Khairpur", "Kaachi", "Quetta", "Islamabad","Pehawar"]
// let zuban : string[] = ["Sindhi", "Arabic","Urdu", "Chinese", "French"] 
// console.log("I want to hike on all mountains like " + mountains)
// console.log("I want to swim in all rives like " + rivers)
// console.log("I want to travel and see all the cities like " + cities)
// console.log("I want to learn and speak all the languages like " + zuban)
// // Challenge : Day 7 (Question 3)
// const myCar = {
//     model : "2008",
//     color : "Brown",
//     manufacture : "Honda",
//     HP : "1300cc"
// }
// console.log(myCar["model"])
// console.log(myCar["color"])
// console.log(myCar["manufacture"])
// console.log(myCar["HP"])
// // Challenge : Day 8 (Question 1)
// try {
// let Stationary : string[] = ["Pen", "Pencil", "Eraser", "Sharpner", "Marker", "Glue"]
// console.log(Stationary.length)
// console.log(Stationary[6])
// }
// catch  (e){
//     if (e instanceof Error) {
//         if (e.message.includes("undefined")) {
//             console.error("Index-related error:", e.message);
//         } else {
//             console.error("Other error:", e.message);
//         }
//     } else {
//         console.error("Unexpected error:", e);
//     }
// }
// // Challenge : Day 8 (Question 2)
// let marks : number = 20;
// if (marks >= 0 && marks <= 100) {
//     if (marks >= 90) {
//         console.log("You are in A-1 Grade")
//     } else if (marks >= 80) {
//         console.log("You are in A Grade")
//     } else if (marks >= 70) {
//         console.log("You are in B Grade")
//     } else if (marks >= 60) {
//         console.log("You are in C Grade")
//     } else if (marks >= 50) {
//         console.log("You are in D Grade")
//     } else if (marks >= 40) {
//         console.log("You are in E Grade")
//     } else {
//         console.log("You are FAIL")
// } 
// }
// // Challenge : Day 8 (Question 3)
// let names : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// for (let i = 0; i < names.length; i ++)
// if (names[i] == "Aqeel"){
//     console.log(`Yor are the Data Base  Expert Mr. ${names[i] }`)
// } else if (names[i] == "Adnan"){
//     console.log(`Yor are the Software  Expert Mr. ${names[i] }`)
// } else if (names[i] == "Adil"){
//     console.log(`Yor are the Web Designer Expert Mr. ${names[i] }`)
// } else {
//     console.log (`You are not an IT Professional ${names[i]}`)
// }
// // Challenge : Day 9 (Question 1)
// let alien_color : string[] = ["Red", "Green", "Yellow", "Bown"]; // Array for hold the colors scheme
// for (let i = 0; i < alien_color.length; i++) {
//     if (alien_color[i] === "Red" || alien_color[i] === "Green" || alien_color[i] === "Yellow") {
//         console.log(`${alien_color[i]} is an Alien Color`); // if the color is alien 
//     } else {
//         console.log(`${alien_color[i]} is not an Alien Color`); // if color is not alien
//     }
// }
// // Challenge : Day 9 (Question 2)
// let alien_color : string[] = ["Red", "Green", "Yellow", "Bown"]; // Array for hold the colors scheme
//  for (let i = 0; i < alien_color.length; i++) {
//     if (alien_color[i] == "Yellow" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if the color is alien 
//     } else if (alien_color[i] == "Green" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else if (alien_color[i] === "Red") {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else {
//         console.log(`${alien_color[i]} is not an Alien Color`); // if color is not alien
//     }
// }
// // Challenge : Day 9 (Question 3)
// let alien_color : string[] = ["Red", "Green", "Yellow", "Bown"]; // Array for hold the colors scheme
//  for (let i = 0; i < alien_color.length; i++) {
//     if (alien_color[i].toLowerCase() == "yellow" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if the color is alien 
//     } else if (alien_color[i] == "Green" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else if (alien_color[i] === "Red") {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else {
//         console.log(`${alien_color[i]} is not an Alien Color`); // if color is not alien
//     }
// }
// // Challenge : Day 10 (Question 1)
// let age : number = 42;
// if (age < 2 ) {
//     console.log ("You are the baby");
// } else if (age >= 2 && age < 4) {
//     console.log ("You are the Toddler");
// } else if (age >= 4 && age < 13) {
//     console.log ("You are the Kid");
// } else if (age >= 13 && age < 20) {
//     console.log ("You are the Teenager");
// } else if (age >= 20 && age < 65) {
//     console.log ("You are the Adult");
// } else {
//     console.log ("You are the Elder");
// } 
// // Challenge : Day 10 (Question 2)
// let favourite_fruits : string[] = ["Coconut", "Mango", "Peach", "Oranges", "Banana"]
// favourite_fruits.forEach(fruit =>{
//     if (fruit.toLowerCase() == "banana") {
//         console.log(`I like the ${fruit} too much.`);
//     } else {
//     console.log(`${fruit} is not your desired fruit.`)
//     }
// })
// // Challenge : Day 10 (Question 3)
// let officials : string[] = ["Manager", "General Manager", "Admin", "Transport Officer"]
// officials.forEach(official =>{
//     if (official.toLowerCase() == "admin") {
//         console.log(`Hellow ${official} you are the main Administrator of our Organization`)
//     } else {
//         console.log(`Hellow ${official}, how r u??`)
//     }
// })
// // Challenge : Day 11 (Question 1)
// let users : string[] = ["Administrator", "Wshop_User", "DBA_User"];
// console.log("There are " + users.length + " Users available"); // There are 3 users, Array is not empty
// users.pop()
// console.log("There are " + users.length + " Users available"); // There are 2 users, Array is not empty
// users.pop()
// console.log("There are " + users.length + " Users available"); // There are 1 user, Array is not empty
// users.pop()
// console.log("There are " + users.length + " Users available"); // There are 0 users, Array is empty
// // Challenge : Day 11 (Question 2)
// let usernames : string [] = ["Waheed", "Adil", "Qamar", "Adnan", "Huzaifa"];
// let current_users : string [] = ["Maqsood", "Adil", "Kamran", "Adnan", "Adeel"];
// for (let i = 0; i < usernames.length; i ++){
//     if (current_users[i].toLowerCase() === usernames[i].toLowerCase()){
//         console.log(`User Name ${current_users[i]} already exist.`)
//     } else {
//         console.log(`This User name ${current_users[i]} is available`)
//     }
// }
// // Challenge : Day 11 (Question 3)
// let ordinal_number : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < ordinal_number.length; i ++) {
//     if (ordinal_number[i] == 1){
//         console.log(`${ordinal_number[i]}st`)
//     } else if (ordinal_number[i] == 2) {
//         console.log(`${ordinal_number[i]}nd`)
//     } else if (ordinal_number[i] == 3) {
//         console.log(`${ordinal_number[i]}rd`)
//     } else {
//         console.log(`${ordinal_number[i]}th`)
//     }
// }
// // Challenge : Day 12 (Question 1)
// let pizza : string [] = ["Fujita Pizza", "Tikka Pizza", "Peproni Pizza" ]
// for (let i = 0; i<pizza.length; i++){
//     console.log(`I want to eat pizza and i like to eat ${pizza[i]}`)
// }
// console.log("I like pizza\nand i like to eat all flavours\nspicy pizza are too much tasty")
// // Challenge : Day 12 (Question 2)
// let animals : string[] = ["Horse", "Dog", "Cat"]
// for (let i = 0; i<animals.length; i++){
//     console.log(animals[i])
//     console.log(`${animals[i]} is a pet animal`)
// }
// console.log("They are not Halal\nHorse is good for Travelling\nDog is good for watching at night")
// // Challenge : Day 12 (Question 3)
// function make_shirt(size: string, mesg:string){
//     console.log("The Shirt size is " + size + " and message is " + mesg)
// }
// make_shirt("Medium", "Pakistan Zindabad")
// // Challenge : Day 13 (Question 1)
// function make_shirt(size: string = "Large" , mesg:string = "I Love TypeScript"){
//     console.log("The Shirt size is " + size + " and message is " + mesg)
// }
// make_shirt()
// make_shirt("Medium", "Proud to be Pakistani")
// make_shirt("Small", "I will become a Programmer very soon")
// // Challenge : Day 13 (Question 2)
// function describe_city(city: string, country:string = "Pakistan"){
//     console.log(`The ${city} is in ${country}`)
// }
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Mascat", "Oman")
// // Challenge : Day 13 (Question 3)
function city_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Karachi");
city_country("Lahore");
city_country("Quetta");
