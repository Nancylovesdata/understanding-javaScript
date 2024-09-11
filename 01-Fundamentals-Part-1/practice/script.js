
// Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);


//Data types
// let javascriptIsFun = true
// console.log(javascriptIsFun)


// console.log(typeof javascriptIsFun)
// console.log(typeof "Jonas")
// console.log(typeof 23)


// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// year = 1998
// console.log(typeof year)


// let kojo = null;
// console.log(typeof kojo)


////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);

//Basic operators

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;

// const ageSarah = now - 2018

// console.log(ageJonas, ageSarah)
// console.log(ageJonas + 2, ageSarah / 10, 2 ** 3)

// const firstName = 'Jonas';
// const lastName = 'smithMan';
// console.log(firstName + ' ' + lastName)


//  Assignment operators
// let x = 10 + 5;//15
/*
x += 10; // x = x + 10=25
console.log(x)


x *= 4; // x = x * 4 = 100


x++; // x = x + 1 = 101

x--;;  // x = x-1
x--;;  // x = x-1
console.log(x)


// comparison operarators
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)



////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


// strings and template literals
const firstName = 'jonas'
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a' + ' ' + (year - birthYear) + 'years old' + job + '!';

console.log(jonas)


// The template literals/ strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`);

//multi line strings before ES6
console.log("string with \n\
multiple \n\
lines \n\
it's someway")

// 
console.log(`string
multiple
lines`)