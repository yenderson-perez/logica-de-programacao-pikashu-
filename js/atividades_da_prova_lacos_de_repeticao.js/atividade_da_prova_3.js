// Item 3
//
//Contexto: O sistema financeiro de um e-commerce consolida o faturamento diário a partir das vendas registradas no período. Antes de colocar o cálculo em produção, a equipe de desenvolvimento o valida com um cenário de teste composto por 10 vendas, no qual o valor de cada venda, em reais, corresponde ao seu número de ordem (a 1ª venda equivale a R$ 1, a 2ª a R$ 2, e assim sucessivamente até a 10ª). A soma desses valores representa o faturamento simulado do dia.
//
//Comando: Implemente em JavaScript um programa que some os valores das 10 vendas (de 1 a 10) e exiba o faturamento total com console.log().
// let  venda1 = 1 , venda2 = 2 , venda3 = 3 , venda4 = 4 , venda5 = 5, venda6 = 6 , venda7 = 7, venda8 = 8 , venda9 = 9, venda10 = 10;
// let resultado = venda1 + venda2 + venda3 + venda4 + venda5 + venda6 + venda7 + venda8 + venda9 + venda10; 
// console.log(resultado);


let faturamentoTotal = 0;

for (let venda = 1; venda <= 10; venda++) {
  faturamentoTotal += venda;
}

console.log("Faturamento total do dia: R$", faturamentoTotal);
console.log(`🐢`)