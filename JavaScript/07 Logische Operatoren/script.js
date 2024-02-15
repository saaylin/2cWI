// Erstelle zwei Zufallszahl zwischen 0 und 100 
// Speichere diese jeweils in einer Variable 

var randomnumber = Math.floor(Math.random() * 101);

console.log("randomnumber 1: " + randomnumber1);
console.log("randomnumber 2: " + randomnumber2);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 

var zufallszahl1 = Math.floor(Math.random() * 101);
var zufallszahl2 = Math.floor(Math.random() * 101);

if (zufallszahl1 < zufallszahl2 && zufallszahl1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
} else {
    console.log("Die Bedingung ist nicht erfüllt.");
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 
 
if (zufallszahl1 < 30 || zufallszahl2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
} else {
    console.log("Keine der beiden ist kleiner als 30.");
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 

if (zufallszahl1 < 50 && zufallszahl2 !== 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
} else {
    console.log("Die Bedingung ist nicht erfüllt.");
}