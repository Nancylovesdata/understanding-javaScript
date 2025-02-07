"use strict";
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
