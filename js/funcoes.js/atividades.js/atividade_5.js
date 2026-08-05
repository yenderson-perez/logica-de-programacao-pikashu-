//#### **ITEM 5**
//**Contexto:** Uma loja virtual aplica, por padrão, um desconto de 10% em compras realizadas por clientes cadastrados no programa de fidelidade, podendo conceder percentuais promocionais diferentes em datas especiais. O sistema de precificação precisa de uma função que calcule o preço final de um produto considerando esse desconto.
//**Comando:** Implemente em JavaScript uma função chamada calcularPrecoComDesconto, que receba os parâmetros preco e desconto, sendo o desconto um parâmetro com valor padrão de 10, e retorne o preço final. Em seguida, chame a função e exiba o resultado com console.log().
let preco = 20.13; 
let cadastrados = prompt(`Você é cliente cadastrado ?`.toLowerCase());
    if ( cadastrados == "sim" || cadastrados == "s") {
        function calcularPrecoComDesconto ( preco, desconto = 0.10 ){
           return preco - (preco * desconto);
        }
      let  precofinal = calcularPrecoComDesconto(20.13,);
    console.log(`O preço final, com o desconto é: $${precofinaltotal.toFixed(2)}`);    
        alert(`O preço final, com o desconto é: $${precofinaltotal.toFixed(2)}`);
}  else {
    console.log(`O preço final é de: $${preco}`)
    }

    console.log(`🐢`)