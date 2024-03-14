// Erstelle eine Zufallszahl zwischen 5 und 10
var zufallszahl = Math.floor(Math.random() * 6) + 5;

// Gib die Zufallszahl aus
console.log("Zufallszahl: " + zufallszahl);

// Verwende eine switch-Anweisung, um den passenden Text auszugeben
switch (zufallszahl) {
    case 10:
        console.log("ten");
        break;
    case 9:
        console.log("nine");
        break;
    case 8:
        console.log("eight");
        break;
    case 7:
        console.log("seven");
        break;
    case 6:
        console.log("six");
        break;
    case 5:
        console.log("five");
        break;
    default:
        console.log("Die Zufallszahl liegt außerhalb im bereich von 5-10");
}
