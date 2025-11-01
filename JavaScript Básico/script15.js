//15 - Faça um algoritmo que crie uma array de 10 posições, onde cada elemento corresponde ao quadrado de sua posição. Imprima depois o array resultante.

let i;
let arrayResultante = [];

for (i = 0; i < 10; i++) {
    arrayResultante[i] = i * i;
}

console.log(arrayResultante);
