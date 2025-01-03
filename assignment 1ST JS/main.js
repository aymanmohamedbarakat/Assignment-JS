//************************************************** */
// IN LECTURE
//************************************************** */


// let username = prompt("enter ur name"); 
// let UserAge = prompt("enter ur years") 

// let age = new Date().getFullYear() - UserAge;

// console.log("userName: " + username + "\nAge: " + age);

// or

// let UserBrithy = prompt("enter ur age");

// let Age = 2024 - UserBrithy;

// console.log("your age is :" + Age);
// document.write("your age is :" + Age);


// let shirt = prompt("enter price");

// let discount = 20/100;

// let dicountPrice = (shirt * discount) ;

// console.log("ur price:" + dicountPrice);

//******************************************************************************************************* */

//******************************************* */
// THE ASSIGNMENT
//******************************************* */

let price = prompt("enter price");
let discount = prompt("enter discount")/100;

let discountFromPrice = price * discount;

let discountAfterPrice =  price - discountFromPrice ;

let addTex = discountAfterPrice * (14/100);

let finalValue = discountAfterPrice + addTex;


console.log("ur price:" + finalValue);

document.write("ur price:" + finalValue)
