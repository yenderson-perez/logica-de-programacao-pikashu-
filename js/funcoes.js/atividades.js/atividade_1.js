//#### **ITEM 1**
//**Contexto:** Um sistema de checkout de uma loja virtual precisa calcular o valor total de um item em diferentes telas do aplicativo, como o carrinho, o resumo do pedido e a nota fiscal. Para evitar repetir a mesma lógica de cálculo em cada tela, a equipe de desenvolvimento decidiu isolar essa operação em uma função reutilizável, responsável por receber a quantidade e o preço unitário do produto e devolver o valor total correspondente.
//**Comando:** Implemente em JavaScript uma função chamada calcularTotal, que receba os parâmetros quantidade e precoUnitario e retorne o valor total da compra. Em seguida, chame a função com valores de teste e exiba o resultado com console.log()
 for (let i = 1; i>0, i< 10 ; i++){//tirar o for 

    function calcularTotal(quantidade, precoUnitario){
        return quantidade * precoUnitario;

}

let quantidade = i; // tirar a variavel i e adicionar um valor fixo
 
let precoUnitario = 49.90;


let total = calcularTotal(quantidade, precoUnitario);

console.log(`Valor Total Da Compra: $${total.toFixed(2)}`);

}


console.log(`🐢`)