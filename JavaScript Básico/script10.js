// Exercício 10//
// 10. A concessionária de veículos “CARANGO VELHO” está vendendo os seus veículos com desconto. Faça um algoritmo que calcule e exiba o valor do desconto e o valor a ser pago pelo cliente de vários carros. O desconto deverá ser calculado de acordo com o ano do veículo. Até 2000 - 12% e acima de 2000 - 7%. O sistema deverá perguntar se deseja continuar calculando desconto até que a resposta seja: “(N) Não”. Informar total de carros com ano até 2000 e total geral.//

let totalCarrosAte2000 = 0;
let totalCarros = 0;
let continuar = "S";

while (continuar.toUpperCase() === "S") {
  let valor = prompt("Digite o valor do carro: ");
  let ano = prompt("Digite o ano do carro: ");

  let desconto = 0;
  let valorFinal = 0;

  if (ano <= 2000) {
    desconto = valor * 0.12;
    totalCarrosAte2000++;
  } else {
    desconto = valor * 0.07;
  }

  valorFinal = valor - desconto;

  console.log("Desconto: R$ " + desconto + "\nValor a pagar: R$ " +  valorFinal);

  totalCarros++;

  continuar = prompt("Deseja continuar calculando desconto? (S/N): ");
}

console.log("Total de carros até 2000: " + totalCarrosAte2000 + "\nTotal geral de carros: " + totalCarros);
