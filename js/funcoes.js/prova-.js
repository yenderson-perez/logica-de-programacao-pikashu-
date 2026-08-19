// ------------------------------------
// Funções
// ------------------------------------

function frete(km, base = 5.00) { 
    return base * km; 
}

function urgenciaDoPedido(urgencia) { 
    return urgencia ? 50.00 : 0; // Uso de operador ternário para simplificar
}

function distancia(distanciaKm, valor) { 
    if (distanciaKm > 100) { 
        return valor * (10/100); // Acréscimo de 10%
    } 
    return 0; 
}

function imposto(valor) { 
    return valor * (5/100); // 5% de imposto 
}

// ------------------------------------
// Processo
// ------------------------------------

for (let i = 1; i <= 4; i++) {
    let distanciaKm = Number(prompt("Digite a distância em km:"));
    let resultadoFreteBase = frete(distanciaKm);
    
    let entradaUrgencia = prompt(
        `O frete base é de R$ ${resultadoFreteBase.toFixed(2)}\nDigite:\nsim = pedido urgente\nnão = pedido normal`
    ).toLowerCase();
    
    // Define se é urgente (true/false)
    let ehUrgente = (entradaUrgencia === "sim");
    
    // Busca os valores das funções
    let taxaDeUrgencia = urgenciaDoPedido(ehUrgente);
    let descontoDistancia = distancia(distanciaKm, resultadoFreteBase);
    
    // Cálculo unificado (Acréscimo de distância agora soma em vez de subtrair)
    let subtotal = resultadoFreteBase - descontoDistancia + taxaDeUrgencia; 
    let valorImposto = imposto(subtotal);
    let total = subtotal + valorImposto;
    
    console.log(`
    --- Pedido ${i} ---
    Frete Base: R$ ${resultadoFreteBase.toFixed(2)}
    Taxa de Urgência: R$ ${taxaDeUrgencia.toFixed(2)}
    Acréscimo Distância (>100km): R$ ${descontoDistancia.toFixed(2)}
    Imposto (5%): R$ ${valorImposto.toFixed(2)}
    Total do Frete: R$ ${total.toFixed(2)}
    `);
}

console.log("🐢");