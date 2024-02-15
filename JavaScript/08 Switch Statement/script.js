// Erstelle eine Zufallszahl zwischen 5 und 10
var zufallszahl = Math.floor(Math.random() * 6) + 5;

// Gib die Zufallszahl aus
console.log("Zufallszahl: " + zufallszahl);

// Verwende eine switch-Anweisung, um den passenden Text auszugeben
switch (zufallszahl) {
    case 10:
        console.log("Ten");
        break;
    case 9:
        console.log("Nine");
        break;
    case 8:
        console.log("Eight");
        break;
    case 7:
        console.log("Seven");
        break;
    case 6:
        console.log("Six");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Die Zufallszahl liegt außerhalb des Bereichs 5-10");
}
