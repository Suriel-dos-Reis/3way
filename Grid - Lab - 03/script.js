// Exercício 1//
// Exercício 2//
let resultadoAdicao, resultadoSubtracao, resuultadoMultiplicacao, resultadoDivisao, num1, num2;

num1 = Number(prompt("Digite o número 1:"));
num2 = Number(prompt("Digite o número 2:"));

resultadoAdicao = num1 + num2;
resultadoSubtracao = num1 - num2;
resultadoMultiplicacao = num1 * num2;
resultadoDivisao = num1 / num2;

console.log("O resultado da soma é: "          + resultadoAdicao) + "\n";
console.log("O resultado da subtração é:"      + resultadoSubtracao) + "\n";
console.log("O resultado da multiplicação é:"  + resultadoMultiplicacao) + "\n";
console.log("O resultado da divisão é: "       + resultadoDivisao) + "\n";

// Exercício 3//
let valorCusto, valorPercentual, resultadoValorDeVenda, valorAcrescimo;

valorCusto = Number(prompt("Valor do Custo:"));
valorPercentual = Number(prompt("Percentual de acrescimo:"));

valorAcrescimo = (valorCusto * valorPercentual / 100)
resultadoValorDeVenda = valorCusto + valorAcrescimo;

console.log("Valor de venda: "       + resultadoValorDeVenda) + "\n";

// Exercício 4//
let valorProduto, qtdParcela = 5, valorParcela;

valorProduto = Number(prompt("Valor do Produto:"));
//qtdParcela = Number(prompt("Quantas parcelas:"));

valorParcela = (valorProduto / qtdParcela)

console.log("Valor das parcelas: "  + valorParcela) + "\n";


// Exercício 5//
let valorProduto1, valorProduto2, valorProduto3, qtdProduto1, qtdProduto2, qtdProduto3, nomeCliente, produto1 = "porca", produto2 = "parafuso", produto3 = "arruela" ;

nomeCliente = String(prompt("Nome do Cliente:"));

valorProduto1 = Number(prompt("Valor do Produto:" + produto1));
valorProduto2 = Number(prompt("Valor do Produto:" + produto2));
valorProduto3 = Number(prompt("Valor do Produto:" + produto3));

qtdProduto1 = Number(prompt("Qtd do Produto:" + produto1));
qtdProduto2 = Number(prompt("Qtd do Produto:" + produto2));
qtdProduto3 = Number(prompt("Qtd do Produto:" + produto3));

valorFinal1 = valorProduto1 * qtdProduto1;
valorFinal2 = valorProduto2 * qtdProduto2;
valorFinal3 = valorProduto3 * qtdProduto3;

console.log("Nome: "  + nomeCliente) + "\n";
console.log("Produto: " + produto1 + " R$ " + valorFinal1) + "\n";
console.log("Produto: " + produto2 + " R$ " + valorFinal2) + "\n";
console.log("Produto: " + produto3 + " R$ " + valorFinal3) + "\n";


