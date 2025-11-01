//23. Você foi contratado por uma loja de venda de livros usados na internet e tem que realizar a simulação do valor de entrega dos pedidos. O seu programa deve solicitar ao vendedor o total a ser pago pelo cliente e qual o prazo de entrega desejado (3, 5, 7 ou 10 dias úteis). Para cada tipo de entrega, deve ser criada uma nova função que receba o valor total pago pelo cliente. As entregas disponíveis são as seguintes: 1 - Entrega em 3 dias úteis (adicionar R$ 25,00 reais ao valor pago pelo cliente), 2 - Entrega em 5 dias úteis (adicionar R$ 20,00 reais ao valor pago pelo cliente), 3 - Entrega em 7 dias úteis (adicionar R$ 15,00 reais ao valor pago pelo cliente) e 4 - Entrega em 10 dias úteis (adicionar R$ 10,00 reais ao valor pago pelo cliente).

// Função principal que recebe o valor e o prazo escolhido
function calcularEntrega(valor, prazo) {
  switch (prazo) {
    case 3:
      return (valor + 25);
    case 5:
      return (valor + 20);
    case 7:
      return (valor + 15);
    case 10:
      return (valor + 10);
    default:
      return ("Prazo de entrega inválido! Escolha 3, 5, 7 ou 10 dias.");
  }
}

// Parte principal
  let valorPedido = prompt("Digite o valor total: "); // valor total dos livros
  let prazoEscolhido = prompt("Digite o prazo: "); // escolha do vendedor: 3, 5, 7 ou 10

  const valorFinal = calcularEntrega(valorPedido, prazoEscolhido);
  console.log(
    `Valor do pedido: R$ ${valorPedido}\nPrazo escolhido: ${prazoEscolhido} dias úteis\nValor final com entrega: R$ ${valorFinal}`
  );
