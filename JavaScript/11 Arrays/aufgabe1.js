/* Erstelle ein Array mit folgenden Werten: 
4,1,2,3 
Füge die Werte 17 und 199 dazu 
Gib alle Werte in einer Schleife aus! 
Zähle alle Werte zusammen und gib das Ergebnis aus 
Berechne den Mittelwert der Zahlen und gib das Ergebnis aus */


let numbers = [4, 1, 2, 3];

numbers.push(17, 199);

console.log("Alle Werte im Array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Summe der Werte:", sum);

let average = sum / numbers.length;
console.log("Mittelwert der Zahlen:", average);
