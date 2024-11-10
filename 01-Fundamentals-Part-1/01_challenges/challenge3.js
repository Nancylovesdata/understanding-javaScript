/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.





2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 8
*/

// SOLUTION
// Q1
// const totalScore = 3;
// console.log (totalScore)

// const scoreDolphins =  (96 + 108 + 89)/ totalScore ;
// const scoreKoalas  = (88 + 100 + 110) / totalScore ;

// console.log (scoreDolphins, scoreKoalas )


// // Q2
// if (scoreDolphins >scoreKoalas){
//     console.log (`Dolphins win the trophy `)
// }else if(scoreDolphins < scoreKoalas){
//     console.log(`Koalas win the trophy`)
// }else if (scoreDolphins === scoreKoalas){
//     console.log(`Both win the trophy`)
// }


// BONUS 1
const totalScore = 3;
console.log (totalScore)

const scoreDolphins =  (97 + 112 + 80)/ totalScore ;
const scoreKoalas  = (109 + 95+ 50) / totalScore ;

console.log (scoreDolphins, scoreKoalas )


// Q2
if (scoreDolphins >scoreKoalas && scoreDolphins >= 100 ){
    console.log (`Dolphins win the trophy `)
}else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log(`Koalas win the trophy`)
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log(`Both win the trophy`)
}else{
    console.log(`No one wins the trophy`)
}
