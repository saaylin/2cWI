/* the programm the nucleor´tides inside a DNA sequence can
be represented by a string composed by A, C, G and T. 
A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG":

Your Task is to count how many times the symbols A,C, G and T appear in the strings.

Input: A single line, composed of A,C,G and T.
Output: The number of times A, C,G and T appear in the strings, seperated by a space 
Constraints: 0<len(s)<100
example: Input AACT
        Output 2 1 0 1
*/ 

function countNucleotides(sequence) {
    // Initialize counts for each nucleotide
    let A = 0;
    let C = 0;
    let G = 0;
    let T = 0;

    // Loop through the sequence and count each nucleotide
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === 'A') {
           A++;
        } else if (sequence[i] === 'C') {
            C++;
        } else if (sequence[i] === 'G') {
            G++;
        } else if (sequence[i] === 'T') {
            T++;
        }
    }

    // Print the counts separated by a space
    console.log(A + " " + C + " " + G + " " + T);
}

// Get input from the user
let sequence = prompt("Enter the DNA sequence:");

// Call the function to count nucleotides
countNucleotides(sequence);
