"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// short list of variable names that are reserved for features  that will added to the language later

// const interface = "Audio";

// const private = 543;s

// const if = 43

// FUNCTIONS
// WHtat are functions
// Is a piece of code we can reuse over and over again. It contains pieces of code in them. Difference between variales and function is that, Variables hold values but functions hold lines of codes.

function logger() {
  console.log("My name is Nancy");
}
// we place the console log in a function because we want to reuse it.

// invoke or call the function, or run the function

logger();
logger();
logger();

// a function can also receive data and return data
// In the parenthesis , we put parameters there.
// Parameters are like variables, they hold values that are tied or specific to a particular function.
function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  // Now we want to simulate that oranges and apples we have will produce the juice we need based on the quantity we the apples and oranges we give it.
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// the actual values of a parameter are called arguments.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//OR
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
