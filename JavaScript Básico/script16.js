//16 - Escrever um algoritmo que leia 5 números inteiros e depois imprima em ordem inversa.

let numero = 0;
let arrayNumeros = [];
let i = 0;

while (i <= 5) {
    let numero = prompt("Digite um número");
    arrayNumeros[i] = numero;
    console.log(i);
    i++;
}

i = 5;
while (i >= 0) {
    console.log(arrayNumeros[i]);
    i--;
}
