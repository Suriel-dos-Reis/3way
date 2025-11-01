//17. Faça um algoritmo que leia 5 números reais e depois exiba os números localizados nas posições ímpares.

let numero = 0
let arrayNumeros = []
let i = 0

while (i <= 5) {
	let numero = prompt("Digite um número");
	arrayNumeros[i] = numero
	i++;
}

i = 1
while (i <= 5) {
	if ((i % 2) != 0){
		console.log(arrayNumeros[i]);
	}
	i++;
}

