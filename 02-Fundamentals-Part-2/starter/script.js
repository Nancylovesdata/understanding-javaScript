// FUNCTIONS REVIEW: 3 DIFFERENT FUNCTION TYPES
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetireMent = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired😊`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetireMent(1991, "Nancy"));
// console.log(yearsUntilRetireMent(1970, "Kofi"));

// //  We have:
// // Function Declaration

// console.log(calcAnnualIncome(5000)); // used before it defined.

// function calcAnnualIncome(monthlyIncome) {
//   return 12 * monthlyIncome;
// }

// // Function Expression
// const calcAnnualIncome = function (monthlyIncome) {
//   return 12 * monthlyIncome;
// };
// console.log(calcAnnualIncome(5000)); // used after it defined.

// // arrow function
// const calcAnnualIncome = (monthlyIncome) => 12 * monthlyIncome;
// console.log(calcAnnualIncome(5000)); // used after it defined.

// summary
// 1. Function declaration is a function that can be used before it's declared.
// 2. Function expression is a function value stored in a variable
// . Arrow function is a quick one line fxn . Has no keyword, has no return, parameter comes right after the equal to.

// ARRAYS (DATA STRUCTURES)
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// storing multiple items into a big container so later we can reference them.

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Another way of writting an array
const y = new Array(1991, 2002, 1998);

// Now lets pick what we need and show
console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

// finding the number of elements in the array
console.log(friends.length);

// finding the last element in the array
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// why were able  to change a variable declared with a const
// Reason: Only primitive values(string, boolean, bigInt, null, undefined, symbol) are immutable but array is not a primitive value so u can mutate(change or reassign)it.

// What you cannot do:
// friends = ["Bob", "Alice"];

// An array can hold values of different data types

const firstName = "Jonas";
const jonas = [firstName, "Freeman", 2025 - 1998, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

// we can put functions into an array because fxns a value
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
