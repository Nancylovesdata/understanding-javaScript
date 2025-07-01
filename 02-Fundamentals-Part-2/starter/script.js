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
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
// storing multiple items into a big container so later we can reference them.

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// Another way of writting an array
// const y = new Array(1991, 2002, 1998);

// Now lets pick what we need and show
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[1]);

// finding the number of elements in the array
// console.log(friends.length);

// finding the last element in the array
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// why were able  to change a variable declared with a const
// Reason: Only primitive values(string, boolean, bigInt, null, undefined, symbol) are immutable but array is not a primitive value so u can mutate(change or reassign)it.

// What you cannot do:
// friends = ["Bob", "Alice"];

// An array can hold values of different data types

// const firstName = "Jonas";
// const jonas = [firstName, "Freeman", 2025 - 1998, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

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

// Basic Array Methods/ Operators

// Add elements to the last member
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Adds element to the first member
friends.unshift("Michael");
console.log(friends);

// Remove elements
console.log(friends);

friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);

// Removes first element
const shifted = friends.shift();
console.log(shifted);

// Tells us in which position is the array(learnt that this is case sensitive)
// the first console will not work, it willreturn-1 becasue it doesnt exist
console.log(friends.indexOf("steven"));
console.log(friends.indexOf("Steven"));

friends.push(23);
console.log(friends.includes(23));

// return true or false if the element is in the array or not
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Peter");
}

// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// So just like arrays, object is use to group variables that really belong together, with object order does not matter when you want to retrieve them. So arrays are for structured data whilst objects are unstructured data. For objject you give it a name and u retrieve it by the name. In all the property name is what matters.
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// Dots And Bracket Notations
//  How to get property from an obect
// 1st wa: The dot notation

// console.log(jonas.lastName);

// bracket
// console.log(jonas["lastName"]);

// Another way of retrieving Jonas name, lastmame or first name
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// But the above wont work for tje dot notatiion.

// So when do we use each

// const interestenIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// this will be undefined because you are trying to access a property name on object that doesnt exist.
// console.log(jonas.interestenIn);
// but this will work because interestenIn is a variable whose value is 'job', so it effectively becomes jonas['job'].

// if (jonas[interestenIn]) {
//   console.log(jonas[interestenIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@nancy";
// jonas.girlFriend = "akose";
// // jonas[newFriend] = "gemini";
// console.log(jonas);

// if (jonas[interestenIn]) {
//   console.log(jonas[interestenIn]);
// } else {
//   console.log(
//     "Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
//   );
// }

// How to use the dot and bracket notation to add property names to an object.
// jonas.location = "Dansoman";
// jonas["twitter"] = "@nancydata";
// jonas.wife = "alisa";
// // jonas.bestFriend = "Michael";
// console.log(jonas);

// write a sentence " Jonas has 3 friends,and his best friend is called Michael"

// MY ANSWER
// if (jonas[interestenIn]) {
//   console.log("Jonas has 3 friends,and his best friend is called Michael");
// } else {
//   console.log("Wrong! You dont know Jonas very well");
// }

// SOLUTION
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length}, and his bestfriend is called ${jonas.friends[0]} `
// );

// OBJECT METHODS
// Remember function is another type of value, that means we can create key value pair in which the value is a function.And that then means that we can in fact,add functions to objects.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },

  // calcAge: function () {
  //   // this is the objectthe method belongs to.
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // },

  calcAge: function () {
    // this is the objectthe method belongs to.
    // we can also use to store a new property in an object.
    this.age = 2037 - this.birthYeah;

    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// Any function that is attached to a an object is called a method.

// Also note that you cannot use function declaration , function declaration is what is below.
// function calcAge() {
//   return 2037 - birthYeah;
// }

// It takes function expression to place a function in  an object. A function expression is:
// const calcAge = function (biirt) {
//   return 2037 - birthYeah;
// };

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas["calcAge"](1991));

// Exercise
// Write a method called getSummary, and this method should return a string that will summarize the data about jonas.

// Eg : "Jonas is a 46- year old teacher, and he has a drivers license.  "

console.log(jonas.getSummary());

// Now in conclusion, when we analyse arrays from the example below, we can say arrays too  are objects, special kinds of objects, because like this, it uses a built in function(method). And the friends, is object.
friends.pop();

// ITERARATION
// If else are controlled structures.
// Another controlled structures is called loop
// Loops help us to automatate repetitive task (task that we have to do over and over again.)

// console.log("Lifting weights repitition 1 🤺");
// console.log("Lifting weights repitition 2 🤺");
// console.log("Lifting weights repitition 3 🤺");
// console.log("Lifting weights repitition 4 🤺");
// console.log("Lifting weights repitition 5 🤺");
// console.log("Lifting weights repitition 6 🤺");
// console.log("Lifting weights repitition 7 🤺");
// console.log("Lifting weights repitition 8 🤺");
// console.log("Lifting weights repitition 9 🤺");
// console.log("Lifting weights repitition 10 🤺");

// Instead of repeating one thing through out we can use the for loop.
// The for loop has three parts(the initi)
// for loop keeps running while condition is true
for (let rep = 8; rep <= 20; rep++) {
  console.log(`Lifting weights repitition ${rep} 🤺`);
}

// HOW THE LOOP WORKS:
// 1. Initialization (let rep = 1)
// This runs only once.

// It creates a variable rep and sets it to 1.

// Think of this like "starting from repetition number 1".

// 2. Condition (rep <= 10)
// This is checked before each loop run.

// If it’s true, the loop runs. If false, it stops.

// At first, rep is 1, so 1 <= 10 → true ✅ → loop runs.

// 3. Increment (rep++)
// This runs after each loop cycle.

// rep++ increases rep by 1.

// So after the first round, rep becomes 2, then 3, and so on.
