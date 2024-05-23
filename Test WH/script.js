// Aufgabe 1
// Suche alle geraden Zahlen (modulo) und berechne den Mittelwert 

let sum1 = 0;
const data1= "4,9,-3,-9,-5,10,2,1,14";

let posSum = 0;
let numbers1 = data1.split(",");

if (number%2 == 0){
}

for (let i =0; i < numbers1.length; i++) {
    if (numbers1[i] > 0){
        Sum1 = Sum1 +parseInt(numbers1[i]);
    }
    if (numbers1[i] < 0) {
        posSum = posSum + parseInt(numbers1[i]);
      }
}

let posMittelwert = sum1/ numbers1.length;

console.log (sum1);
console.log (posMittelwert);
console.log (negSum);



// Aufgabe 2
//gib den Satz rückwärts aus und verdopple jeden Buchstaben

const data2= "Das Leben ist schön";
console.log(data2);
let text = data2.split(" ");

data2.reverse();

if (text [i] == "d" ||text [i] == "a" || text [i] == "s" || text [i] =="l" || text [i] == "e" || text [i] == "b" || text [i] == "n" || text [i] == "i" ||text [i] == "t" || text [i] == "c" || text [i] == "h" || text [i] == "ö" ){
    text[i] * 2;
}

let ergebnis = "";
for (let i = 0; i < text.length; i++){
    ergebnis = ergebnis + text(i);
}
console.log(ergebnis);

 
// Aufgabe 3 
// zähle wie oft a oder e oder ö vorkommen
// Ausgabe: 4
const data3 = "Das Leben ist schön";

const charsToCount = ['a', 'e', 'ö'];

let count = 0;
for (let char of data3) {
  if (charsToCount.includes(char.toLowerCase())) {
    count++;
  }
}

console.log(count); 

    