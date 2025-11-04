/* Erstelle ein Array mit folgenden Strings: 
"Susi", "Paula", "Hans"
Gib folgenden Satz aus: 
"Meine Freunde sind Susi, Paula und Hans 
Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten: 
"Meine Freunde sind Susi, Paula, Hans und Sepp" */


let freunde = ["Susi", "Paula", "Hans"];


function gibFreundeAus(freundeArray) {
    let satz;
    if (freundeArray.length > 1) {
        satz = "Meine Freunde sind " + freundeArray.slice(0, -1).join(", ") + " und " + freundeArray[freundeArray.length - 1];
    } else {
        satz = "Mein Freund ist " + freundeArray[0];
    }
    console.log(satz);
}

gibFreundeAus(freunde);

freunde.push("Sepp");

gibFreundeAus(freunde);
