// Exercício 12//
// 12. A concessionária de veículos “CARANGO” está vendendo os seus veículos com desconto. Faça um algoritmo que calcule e exiba o valor do desconto e o valor a ser pago pelo cliente. O desconto deverá ser calculado sobre o valor do veículo de acordo com o combustível (álcool – 25%, gasolina – 21% ou diesel –14%). O sistema deverá perguntar se deseja continuar até que a resposta seja: “(N) Não”. Informe total de desconto e total pago pelos clientes. //

let totalDesconto = 0;
let totalPago = 0;
let continuar = "S";

while (continuar.toUpperCase() === "S") {
    let valor = parseFloat(prompt("Digite o valor do veículo: "));
    let combustivel = prompt("Digite o tipo de combustível (A - Álcool, G - Gasolina, D - Diesel): ");

    let desconto = 0;

    if (combustivel.toUpperCase() === "A") {
        desconto = valor * 0.25; // 25% para Álcool
    } else if (combustivel.toUpperCase() === "G") {
        desconto = valor * 0.21; // 21% para Gasolina
    } else if (combustivel.toUpperCase() === "D") {
        desconto = valor * 0.14; // 14% para Diesel
    } else {
        console.log("Combustível inválido!");
        continue; // volta para o início do laço
    }

    let valorFinal = valor - desconto;

    console.log(`Valor do veículo: R$ ${valor.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Valor a pagar: R$ ${valorFinal.toFixed(2)}`);
    console.log("----------------------------");

    totalDesconto += desconto;
    totalPago += valorFinal;

    continuar = prompt("Deseja continuar? (S/N)");
}

console.log("===== RESUMO FINAL =====");
console.log(`Total de descontos concedidos: R$ ${totalDesconto.toFixed(2)}`);
console.log(`Total pago pelos clientes: R$ ${totalPago.toFixed(2)}`);
