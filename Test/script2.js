const temperaturesweek1 = "-14,-11,-10,-8,-1,1,2,5,30";
const temperaturesweek2 = "-44,-10,-11,-8,-1,2,3,5,30,";

let mittelwert1 = -1;
for (let i = -1;) {
    console.log (" Mittelwert woche 1:" + mittelwert1);
}

let mittelwert2 = -1;
for (let i = -1;) {
    console.log (" Mittelwert woche 2:" + mittelwert2);
}

if (mittelwert1=mittelwert2){
    console.log("Beide wochen sind gleich");
} else if (mittelwert1<mittelwert2) {
    console.log("Woche 2 war wärmer");
} else if (mittelwert1>mittelwert2) {
    console.log ("Woche 1 war wärmer");
}

