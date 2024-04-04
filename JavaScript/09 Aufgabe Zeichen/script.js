// Erstelle eine Schleife die von 0 bis 100 zählt. Gib folgendes aus: 
//X X X X  
//O O O O  
//X X X X  
//O O O O  
//XXXX…. 

//Bis 10 Zeichen ausgeprintet wurden 


// 1. Schleife zum Ausgeben des Musters
console.log("Muster:");
for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0 && i !== 0) {
        console.log(); // Neue Zeile nach jedem 10. Zeichen, außer beim ersten Mal
    }
    if (i % 2 === 0) {
        process.stdout.write("X "); // Ausgabe für gerade Zahlen
    } else {
        process.stdout.write("O "); // Ausgabe für ungerade Zahlen
    }
    if (i === 10) { // Beenden der Schleife, wenn 10 Zeichen ausgegeben wurden
        break;
    }
}

console.log("\n");

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren
//(zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)  
let sum_even_method1 = 0;
for (let i = 2; i <= 100; i += 2) { // Schleife von 2 bis 100 in Schritten von 2
    sum_even_method1 += i;
}
console.log("Summe der geraden Zahlen (Methode 1):", sum_even_method1);

// Methode 2: Modulo verwenden
let sum_even_method2 = 0;
for (let i = 1; i <= 100; i++) { // Schleife von 1 bis 100
    if (i % 2 === 0) { // Überprüfen, ob die Zahl gerade ist
        sum_even_method2 += i;
    }
}
console.log("Summe der geraden Zahlen (Methode 2):", sum_even_method2);



