// Exercício 13//
// 13. Escrever um algoritmo para uma empresa que decide dar um reajuste a seus funcionários de acordo com os seguintes critérios:
//      a. 50% para aqueles que ganham menos do que três salários mínimos;
//      b. 20% para aqueles que ganham entre três até dez salários mínimos;
//      c. 15% para aqueles que ganham acima de dez até vinte salários mínimos;
//      d. 10% para os demais funcionários. Seja Um Profissional Aprendendo Com Profissionais.
//
//      1. Leia o nome do funcionário, seu salário e o valor do salário mínimo.
//      2. Calcule o seu novo salário reajustado. Escrever o nome do funcionário, o reajuste e seu novo salário.
//      3. Calcule quanto à empresa vai aumentar sua folha de pagamento.

let totalReajustes = 0;
let continuar = "S";

while (continuar.toUpperCase() === "S") {
    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));

    let reajuste = 0;

    if (salario < 3 * salarioMinimo) {
        reajuste = salario * 0.50; // 50%
    } else if (salario <= 10 * salarioMinimo) {
        reajuste = salario * 0.20; // 20%
    } else if (salario <= 20 * salarioMinimo) {
        reajuste = salario * 0.15; // 15%
    } else {
        reajuste = salario * 0.10; // 10%
    }

    let novoSalario = salario + reajuste;

    console.log("Funcionário: " + nome);
    console.log("Reajuste: R$ " + reajuste.toFixed(2));
    console.log("Novo Salário: R$ " + novoSalario.toFixed(2));
    console.log("--------------------------");

    totalReajustes += reajuste;

    continuar = prompt("Deseja cadastrar outro funcionário? (S/N)");
}

console.log("=================================");
console.log("Total de aumentos na folha: R$ " + totalReajustes.toFixed(2));
