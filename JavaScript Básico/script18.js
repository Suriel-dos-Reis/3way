// 18. Escreva um algoritmo que leia 5 valores reais e armazene em um array. Modifique o array de modo que os valores das posições ímpares sejam aumentados em 5%, e os das posições pares sejam aumentados em 2%. Imprima depois o array resultante.


let numero = 0
let arrayNumeros = []
let i = 0

while (i <= 5) {
	let numero = prompt("Digite um número");
	arrayNumeros[i] = numero
	i++;
}

i = 0
while (i <= 5) {
	if ((i % 2) != 0){
		arrayNumeros[i] = arrayNumeros[i] * 105 / 100 ;
	}else{
		arrayNumeros[i] = arrayNumeros[i] * 102 / 100 ;
	}
	i++;
}

i = 0
while (i <= 5) {
	console.log(arrayNumeros[i].toFixed(2));
	i++;
}

