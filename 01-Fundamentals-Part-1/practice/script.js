
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
// const firstName = 'jonas'
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a' + ' ' + (year - birthYear) + 'years old' + job + '!';

// console.log(jonas)


// The template literals/ strings
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew)

// console.log(`Just a regular string...`);

//multi line strings before ES6
// console.log("string with \n\
// multiple \n\
// lines \n\
// it's someway")

// // 
// console.log(`string
// multiple
// lines`)

// 


// Revision on strings and template literals

// const firstName= 'jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYear) + 'years old' + job+ '!'
// console.log(jonas)

// template strings

// const jonasNew= `I'm ${firstName}, a ${year- birthYear } years old ${job}!`
// console.log(jonasNew)

// console.log(`I am a child of God
// multiple
// hi`)

// console.log('I serve God\n\
// All I want is to please him \n\
// I want you to do same \n\
//     ')



// Making decisions with if-else statement
// const age = 15 ;
 

//If-else-control structure

// if (age >= 18 ){
// console.log(`Sarah can start driving license 👍 `)
// }else{
//  const yearsLeft = 18 -age;  
//  console.log(`Sarah is too young. Wait another ${yearsLeft} years`) 
// }


// const birthYear = 1998;
// let century; 
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century)


// Type conversion and coercion
// Type conversion 
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear )
// console.log(Number(inputYear)+ 18)



// Converting a value that's impossible to convert.
// console.log(typeof(Number('Nancy')))
// the above type of returns not a number. This means  since we've converted in string to a number, it's a number oo but it's an invalid number. NAN(Not a number)

// console.log(String(23), 23)



// Type coercion
// console.log ('I am' + ' '+ 23 + ' ' +  'years old')
// The above code indicate that javascript automatically convert the 23 into string to mingle with the regular stings. It treats it is like when you write it this way '23'

// console.log ('23'-'10'-3)
// This time , javascript converted the strings to numbers. This means the minus operator triggers the opposite conversion.

// console.log ('23'+'10'+3)
// Here with the plus sign, the 3 is rather changed into a string, which concatenates all of them.

// console.log ('3'* '2')
// console.log ('23'/'2')

// game
// let n = '1' + 1;

// n=n-1
// console.log(n)


// 5 falsy values: 0, '', undefined, null, Nan
// console.log (Boolean(0));
// console.log (Boolean(undefined));
// console.log (Boolean('Nancy'));
// console.log (Boolean({}));
// console.log (Boolean(''));



// const money = 0;
// In the if statement, where money = 0, javascript convert the money = 0 into a boolean, which is false. So when the code is running and reaches the first block of code, it skips "Don't spend it all" since money is false, and runs the next block of code.
// if (money){ 
//     console.log("Don't spend it all");
// }else{
//     console.log('You should get a job!');
// }



// let height;
// if(height){
//     console.log('Yay! height is defined')
// }else{
//     console.log ('Height is undefined')
// }




// Equality operators == vs===

// const age = '18';
// if (age ===18) console.log('You just became an adult: D (strict)');

// characteristics of the three equaltos
//1. 18===18, will return true(Javascript convert it into a boolen to return true or false. If age become 19, it will be 19 ===18, which will return a false vaue,)

//  This === is called a strict equality. It strict becaus it does not perform type coercion.  

// The loose equality operator(==)
// The double equalto does type coercion


/*
'18'==18 //performs type coercion, since it changes the string into a number
'18'===18 // Does not perform type coercion



if (age ==18) console.log('You just became an adult: D (loose)');


const favourite=Number(prompt("What's your favourite number?"));
console.log(favourite)
console.log(typeof(favourite))

if (favourite===8){
    console.log('cool! 8 is an amazing number')
}else if(favourite===7){
    console.log('7 is also a cool number')
}else if(favourite===10){
    console.log('10 is also a cool number')
}else{
   console.log('Number is not 23 or 7') 
}


if (favourite!==8) console.log('why not the 8!')

*/



    // Boolean logic: The And , or & Not operators
    // Boolean variables
    // ;Eg, age = 16;
    // A: Age is greater or equal 20. // ans : false
    // B: Age is less than 30  // ans : true


 //  Let's use operators!
// ! A  // true
// A and B  // false
// A OR B   // true
// ! A and  // true
// A OR !B  // false
