// Item 13
//
//Contexto: O sistema de uma loja virtual aplica uma promoção na qual os produtos com preço acima de R$ 100,00 recebem frete grátis. Ao revisar um pedido específico, composto por 8 produtos, a equipe precisa identificar quantos itens se enquadram nessa condição para estimar o custo do envio. Os preços dos produtos são informados individualmente durante a conferência do pedido.
//
//Comando: Implemente em JavaScript um programa que leia o preço de 8 produtos (utilizando prompt()), conte quantos têm valor acima de R$ 100,00 e exiba o total com console.log().


let contador = 0;

for (let i = 1; i <= 8; i++) {
  let preco = parseFloat(prompt(`Digite o preço do produto ${i}:`));

  if (preco > 100) {
    contador++;
  }
}

console.log(`Quantidade de produtos com preço acima de R$ 100,00: ${contador}`)
