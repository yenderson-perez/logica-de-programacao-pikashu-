/// ------------------------------------
//Funçoes;
function frete(km, base = 5.00) {
    return base * km;
}

// ------------------------------------
function urgenciaDoPedido(urgencia) {
    if (urgencia) {
        return 50.00;
    }
    return 0;
}

// ------------------------------------
function distancia(distanciaKm, valor) {
    if (distanciaKm > 100) {
        return  valor * (10/100) ; // acréscimo de 10%
    }
    return 0;
}

// ------------------------------------
function imposto(valor) {
    return valor * (5/100); // 5% de impost0
}

// ------------------------------------
//prpcesso
for(let i = 1; i <= 4; i++){
let distanciaKm = Number(prompt("Digite a distância em km:"));

let resultadoFreteBase = frete(distanciaKm);

let urgencia = prompt(
`O frete base é de R$ ${resultadoFreteBase.toFixed(2)}

Digite:
sim = pedido urgente
não = pedido normal`
).toLowerCase();

    if (urgencia === "sim"){
let taxaDeUrgencia = urgenciaDoPedido(true);

let descontoDistancia = distancia(distanciaKm, resultadoFreteBase);

let subtotal = resultadoFreteBase - descontoDistancia + taxaDeUrgencia ;

let valorImposto = imposto(subtotal);
let total = subtotal + valorImposto;

console.log(`
Frete Base: R$ ${resultadoFreteBase.toFixed(2)}
Taxa de Urgência: R$ ${taxaDeUrgencia.toFixed(2)}
Desconto Distância: R$ ${descontoDistancia.toFixed(2)}
Imposto (5%): R$ ${valorImposto.toFixed(2)}

Total do Frete: R$ ${total.toFixed(2)}
`);

} else {
let taxaDeUrgencia = urgenciaDoPedido(false);
let descontoDistancia = distancia(distanciaKm, resultadoFreteBase);

let subtotal = resultadoFreteBase + taxaDeUrgencia- descontoDistancia;

let valorImposto = imposto(subtotal);
let total = subtotal + valorImposto;

console.log(`
Frete Base: R$ ${resultadoFreteBase.toFixed(2)}
Taxa de Urgência: R$ ${taxaDeUrgencia.toFixed(2)}
Desconto Distância: R$ ${descontoDistancia.toFixed(2)}
Imposto (5%): R$ ${valorImposto.toFixed(2)}

Total do Frete: R$ ${total.toFixed(2)}
`);
};
};
console.log("🐢");