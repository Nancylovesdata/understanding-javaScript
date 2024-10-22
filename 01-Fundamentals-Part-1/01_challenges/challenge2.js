////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/



// Test Data 1: Height and Mass of Mark and John 
const markHeight = 1.69
const johnHeight = 1.95

const markMass = 78
const johnMass = 92



//  BMI's
const markBMI =markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2

// console.log('Mark\'s BMI', markBMI)
// console.log('John\'s BMI', johnBMI)



// Information about whether Mark has a higher BMI than John.


if( markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI}) `)
} else{
console.log("John's BMI is higher than Mark's!")
}

