/*  
Initially output equals 0. Iterate through each number in the input and perform the following operation: 
If the number is odd: Multiply it to output 
If the number is even: Add it to the output 
*/ 

let output = 0; 
const data = "4 0 1 2 3 4 5 6 8 1"; 
var inputs = data.split(" "); 
for (let i = 0; i < inputs.length; i++) { 
  const number = parseInt(inputs[i]); 
} 
// Write an answer using console.log() 
// To debug: console.error('Debug messages...'); 
console.log("output:" + output); 

// Korrektes ergebnis ist 124