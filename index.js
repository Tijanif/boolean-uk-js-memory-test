/*
Description
Test the user's memory with this simple little game. This will also put your skills up to the test!

Instructions
- Show the user 4 random numbers between 1 and 100
- After 15 seconds, ask them to enter each number in order
- Let them know how many they got right!

Challenge 1
When asking the user for the numbers, add ordinality to each number you ask. i.e.:
- Enter the 1st number
- Enter the 2nd number
Etc...

Challenge 2
Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function

For example:

playMemoryTest(4) should show and ask for 4 numbers

playMemoryTest(10) should show and ask for 10 numbers

*/


// Show the user 4 random numbers between 1 and 100
function showUserRandomNumbers (){
 let arrayToShowUser = []
while( arrayToShowUser.length < 4) {
 let randomNumber = Math.floor(Math.random() * 100) + 1
 if(arrayToShowUser.indexOf(randomNumber) === -1) arrayToShowUser.push(randomNumber)
}
return arrayToShowUser
}
// console.log(showUserRandomNumbers())
// After 15 seconds, ask them to enter each number in order

 // funtion to ask user of numbers they saw
 function whatNumbersDidYouSee (){
  let numberUserSaw = []
   for(let i = 0; i  < 4; i++){
    let numberUserTyped = Number(prompt("What was the numbers you saw"))
    numberUserSaw.push(numberUserTyped)
   }
   return numberUserSaw
 }

 function comparedAnswers (ramdomNumbersArray, useranswersArray) {
  let count = 0
   for(const randomElement of ramdomNumbersArray){
     if (useranswersArray.includes(randomElement)){
      count++
     }
   }
   return count
 }


  function myMemoryTest() {
  let randomNumbers =  showUserRandomNumbers()
  alert(randomNumbers)
  setTimeout(function (){

    let userAnswers = whatNumbersDidYouSee()
   let rightAnswers  = comparedAnswers(randomNumbers,userAnswers)
   alert(`You guessed ${rightAnswers} numbers corect`)
  }, 1000)
  
 }
 // pass that function to a 15 sec timeout
 // capture the user input
 myMemoryTest()
console.log("I am after the alert")


// Let them know how many they got right!