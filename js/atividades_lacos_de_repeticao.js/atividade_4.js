//4. **Loja de R$ 1,99 do seu Manoel Joaquim**
//- O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
//- `Lojas Quase Dois - Tabela de preços
// 1 - R$ 1.99
// 2 - R$ 3.98
// ...
//50 - R$ 99.50
// let resultado = Number

// let i = Number(prompt(`Bem-Vindo a loja De R$1,99\nDigite a quantidade de productos`));
// if (i>=1 && i <=50){
//      resultado = i * 1.99 ; 
    
// }
// console.log(`A quantidade a pagar por a quantidade dos pruductos informados (${i} é de: ${resultado} )`);
// alert(`A quantidade a pagar por a quantidade dos pruductos informados (${i})\n é de: ${resultado} `);
let resultado;
let i;
 for(i=1; i<=50; i++){
    resultado = i * 1.99;
    console.log(`${i}- R$${resultado}`);
 }
 console.log(`🐢`)