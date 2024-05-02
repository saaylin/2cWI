/*Baue folgende Funktionen: 
add(a,b) 
subtract(a,b) 
mulitply(a,b) 
supercalculation(a,b) -> Formel: (a+b)/2 * a 
printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern. 
Anbei ist die Formel zur Berechnung on Ostern. */ 

// Funktion zum Hinzufügen von zwei Zahlen
function add(a, b) {
    return a + b;
}

// Funktion zum Subtrahieren von zwei Zahlen
function subtract(a, b) {
    return a - b;
}

// Funktion zum Multiplizieren von zwei Zahlen
function multiply(a, b) {
    return a * b;
}

// Funktion zur Superberechnung gemäß der Formel: (a+b)/2 * a
function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

// Funktion zur Berechnung des Osterdatums
function printEasterDate(year) {
    var C = Math.floor(year / 100);
    var N = year - 19 * Math.floor(year / 19);
    var K = Math.floor((C - 17) / 25);
    var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
    I = I - 30 * Math.floor((I / 30));
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
    var J = year + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40) / 44);
    var D = L + 28 - 31 * Math.floor(M / 4);

    var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    console.log("Ostern im Jahr " + year + " ist am " + D + ". " + monthNames[M - 1]);
}

// Beispielaufrufe
console.log(add(5, 3)); // Ausgabe: 8
console.log(subtract(10, 4)); // Ausgabe: 6
console.log(multiply(2, 6)); // Ausgabe: 12
console.log(supercalculation(3, 4)); // Ausgabe: 10.5
printEasterDate(2024); // Ausgabe: Ostern im Jahr 2024 ist am 31. März
