/*O IMC (Índice de Massa Corporal), pode ser calculado dividindo-se o peso da pessoa (em kg) pela altura (h em metros) elevada ao quadrado (IMC= m/h²). Escreva um programa que leia o peso e a altura de uma pessoa, calcule e mostre o IMC e a faixa em que o indivíduo se enquadra de acordo com a tabela abaixo:
Seja Um Profissional Aprendendo Com Profissionais.
www.3way.com.br
IMC Interpretação Menor que 18,5 Abaixo do peso Entre 18,5 e menor que 25 Peso normal Entre 25 e menor que 30 Sobrepeso Entre 30 e menor que 35 Obesidade grau 1 Entre 35 e menor que 40 Obesidade grau 2 Maior ou igual a 40 Obesidade grau 3 Tabela para interpretação do IMC*/

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau 1";
  if (imc < 40) return "Obesidade grau 2";
  return "Obesidade grau 3";
}

// Exemplo de uso:
let peso = 80;
let altura = 1.75;

let imc = calcularIMC(peso, altura);
console.log("IMC:", imc.toFixed(2));
console.log("Classificação:", classificarIMC(imc));
