//24. Crie um programa para simular a gratificação de um vendedor de uma loja de carros usados. O sistema deve solicitar o salário básico do funcionário e o mês que deseja simular o salário com a gratificação. A gratificação corresponde a 30% do salário básico do funcionário nos meses de janeiro até maio. De junho até novembro a gratificação corresponde a 40% do salário básico. Em dezembro, a gratificação equivale a 60% do salário. O sistema deve apresentar a gratificação dentro de uma função que receba o salário por parâmetro.

// Função para calcular a Acrescimos
function calcularAcrescimosValor(money, mes) {
  let acrescimosValor = 0;

  if (mes >= 1 && mes <= 5) {
    acrescimosValor = money * 0.3; // 30% de janeiro a maio
  } else if (mes >= 6 && mes <= 11) {
    acrescimosValor = money * 0.4; // 40% de junho a novembro
  } else if (mes === 12) {
    acrescimosValor = money * 0.6; // 60% em dezembro
  } else {
    console.log("Mês inválido! Digite de 1 a 12.");
  }

  return acrescimosValor;
}

// Função para simular o salário final com Acrescimos
function calcularMoney(money, mes) {
  let acrescimosValor = calcularAcrescimosValor(money, mes);
  let moneyFinal = money + acrescimosValor;

  console.log(`Salário base: R$ ${Number(money).toFixed(2)}`);
  console.log(`Acrescimos: R$ ${acrescimosValor.toFixed(2)}`);
  console.log(`Salário final: R$ ${Number(moneyFinal).toFixed(2)}`);
}

// Exemplo de uso:
let valor1,valor2
valor1 = prompt("Digite o valor1: "); 
valor2 = prompt("Digite o valor2: "); 

calcularMoney(valor1, valor2); // Salário base: 2000 no mês de dezembro
