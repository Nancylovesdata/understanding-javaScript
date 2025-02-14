// FUNCTIONS REVIEW: 3 DIFFERENT FUNCTION TYPES
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetireMent = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired😊`);
    return -1;
  }
};

console.log(yearsUntilRetireMent(1991, "Nancy"));
console.log(yearsUntilRetireMent(1970, "Kofi"));

//  We have:
// Function Declaration

console.log(calcAnnualIncome(5000)); // used before it defined.

function calcAnnualIncome(monthlyIncome) {
  return 12 * monthlyIncome;
}

// Function Expression
const calcAnnualIncome = function (monthlyIncome) {
  return 12 * monthlyIncome;
};
console.log(calcAnnualIncome(5000)); // used after it defined.

// arrow function
const calcAnnualIncome = (monthlyIncome) => 12 * monthlyIncome;
console.log(calcAnnualIncome(5000)); // used after it defined.

// summary
// 1. Function declaration is a function that can be used before it's declared.
// 2. Function expression is a function value stored in a variable
// . Arrow function is a quick one line fxn . Has no keyword, has no return, parameter comes right after the equal to.

// WHAT CONST
