/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/


function getNotaDoAluno(notaDoAluno) {
    
let notaA = notaDoAluno >= 90 && notaDoAluno <= 100;
let notaB = notaDoAluno >= 80 && notaDoAluno <= 89;
let notaC = notaDoAluno >= 70 && notaDoAluno <= 79;
let notaD = notaDoAluno >= 60 && notaDoAluno <= 99;
let notaF = notaDoAluno <= 60 && notaDoAluno <= 0;

let resultadoFinal;

if (notaA) {
    resultadoFinal = 'A';
} else if (notaB) {
    resultadoFinal = 'B'
}  else if (notaC) {
    resultadoFinal = 'C'
}  else if (notaD) {
    resultadoFinal = 'D'
}  else if (notaF) {
    resultadoFinal = 'F'
} else {
    console.log('Nota inválida!')
} 
    return resultadoFinal
}

console.log(getNotaDoAluno(80))




