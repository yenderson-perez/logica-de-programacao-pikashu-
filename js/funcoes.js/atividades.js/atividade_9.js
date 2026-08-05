//9
function calcularDesconto (precoOriginal, valorDesconto = 10) {
    let valorComDesconto = precoOriginal - (precoOriginal * (valorDesconto/100))
    return valorComDesconto;
}
function calcularPrecoFinal (...precos) {
    let soma = 0
    for (let preco of precos){
    soma = soma + calcularDesconto(preco)
}
return soma
}
let precoOriginal1 = 50
let precoOriginal2 = 70
let precoOriginal3 = 40
console.log(calcularPrecoFinal(precoOriginal1, precoOriginal2, precoOriginal3));
