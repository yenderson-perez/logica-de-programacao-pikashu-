//#### **ITEM 2**
//**Contexto:** Um aplicativo de previsão do tempo utilizado por uma emissora de notícias precisa converter temperaturas informadas em graus Celsius para graus Fahrenheit, unidade adotada por parte do público internacional que acompanha o conteúdo. Como essa conversão é utilizada em vários pontos do sistema, ela foi isolada em uma função específica, responsável por receber o valor em Celsius e devolver o valor convertido.
//**Comando:** Implemente em JavaScript uma função chamada celsiusParaFahrenheit, que receba um valor em graus Celsius e retorne o valor correspondente em graus Fahrenheit. Em seguida, chame a função com um valor de teste e exiba o resultado com console.log().

 function celsiusParaFahrenheit (celsius ){
                  return celsius * 1.8 + 32;
 }

 let celsius = 14;

 let conversao = celsiusParaFahrenheit(celsius);




 console.log(conversao);


 
console.log(`🐢`)