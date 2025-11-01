// 19. Faça um algoritmo para criar um array real de 10 posições: as 5 primeiras são informadas pelo usuário, e as 5 seguintes são os mesmos números em ordem inversa.


let numero = 0
let arrayNumeros = []
let i = 0
let ii = 0
while (i <= 4) {
	let numero = prompt("Digite um número");
	arrayNumeros[i] = numero
	i++;
}

i = 5
ii = 4
while (i <= 9) {
	arrayNumeros[i] = arrayNumeros[ii] ;
	i++;
	ii--;
}
console.log(arrayNumeros);

