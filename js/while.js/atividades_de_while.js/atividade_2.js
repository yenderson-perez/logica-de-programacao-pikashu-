//2 Siste ma de depositivos : comece com saldo zero, peça depositivos enquanto o saldo for menor que R$5.000. Exiba o saldo e quanto depositivos fora m feitos
let depositos = 0;
let saldo = 0;
 while ( saldo < 5000  ){
    let deposito = Number(prompt(`Digite um  valor de deposito. \n\n Saldo disponovel: ${saldo.toFixed(2)}`));
    
     if ( deposito <= 0 ) {
        console.log(`Deposito invalido`); 
    
    } else if (deposito >= 1 && deposito <= 5000) {
        saldo += deposito
         depositos++ 
        console.log(`Saldo atual: ${saldo} \n As quantidades de depositos feitos são:${depositos}`);
        
    } else if  ( deposito > 5000) {
            console.log(`Deposito muito elevado,  limite de 5.000`);
    
        } else if ( deposito <= 0 ) {
            console.log(`Deposito invalido`); 
  
    }
 }
  if (saldo >= 5001) {
    console.log(`Saldo maximo alcaçado`);
    alert(`Saldo maximo alcaçado`); 
    }
    console.log(`🐢`)