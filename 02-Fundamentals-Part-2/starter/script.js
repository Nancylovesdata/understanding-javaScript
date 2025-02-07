"use strict";
// use strict is a mode activated in javascript to help us avoid errors. It does this by forbiding us to do certain things, it alsoo creates visible errors in the developer code.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive : D");

// strict mode reserves what cannot be used as variables. Javascript peopkl have reserved them for future use.. Egs below:

// const interface = "audio";

// const private =534

// const if

// Functions
function amen() {
  console.log("My name is Nancy");
}

// using the function
amen(9);
// reusing the function
amen();

// A function can receive and return data

//
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// THIS WAY
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // OR
// console.log(fruitProcessor(5, 0));

// Now changing the values
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges); // blend the apples and oranges;
  // Now we will definitely have a result after blending, lets put the result in a container (variable) called juice.
  const juice = `Juice with ${apples} apples and  ${oranges} oranges`;
  return juice;
}

// lets call the function
// fruitProcessor(5, 0);
// console.log(juice);//✂️ wrong. The reason is that:juice is declared inside the function, meaning it only exists within that function.
// When you try to access juice outside the function (console.log(juice);), JavaScript does not recognize it, causing the ReferenceError.

// instead call the fxn this way:
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// OR  call the fxn this way by just logging it without storing it in a variable.
console.log(fruitProcessor(5, 0));

// Note, the apples and the oranges in the parentheses are called parameters and the values(5 and 0) are the arguments which will be assigned to the parameters.

// let's reuse the function(the machine)
console.log(fruitProcessor(4, 6));

// OR

const appleOrangeJuice = fruitProcessor(98, 100);
console.log(appleOrangeJuice);

// FUNCTION DECLARATION
// a function to calc age based on a given birthyear

// const age1 = calcAge1(1991);
// console.log(age1);

// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// ARROW FUNCTION: Is a special form of function expression that is shorter and faster to write

// arrow fxn
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1995);
console.log(age3);

// one parameter and more than one line of code, we need a return keyword.
// const yearsUntilRetireMent = (birthYeah) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetireMent(1991));

// when you have more than one parameter
const yearsUntilRetireMent = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetireMent(1991, "Nancy"));

console.log(yearsUntilRetireMent(1980, "bob"));
