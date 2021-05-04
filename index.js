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
function playMemoryTest (){
 let arrayToShowUser = []
while( arrayToShowUser.length < 4) {
 let randomNumber = Math.floor(Math.random() * 100) + 1
 if(arrayToShowUser.indexOf(randomNumber) === -1) arrayToShowUser.push(randomNumber)
}
return alert(arrayToShowUser)
}


const intervalID = setInterval(playMemoryTest, 15000,);

// After 15 seconds, ask them to enter each number in order
// Let them know how many they got right!