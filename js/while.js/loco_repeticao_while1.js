let saldo = 1000 ;
while( saldo > 0) {
    let saque = Number(prompt(`Saldo: ${saldo.toFixed(2)}\nDigite um valor para saque `));
    if(saque <=0 ) {
        console.log("Saque inválido");     
        alert("Saque inválido");  
    } else if ( saque > saldo) {
        console.log("Saldo insuficiente");
        alert("Saldo insuficiente");

    } else {
        saldo = saldo - saque; // saldo -= saque
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
}
console.log(`🐢`)