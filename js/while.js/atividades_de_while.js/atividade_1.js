// Adivinar o número secreto 
const numeroSecreto = Math.floor(Math.random() * 100 + 1 );
let chute =  0;
let tentativas = 0;
 while(numeroSecreto !== chute) {
    chute = Number(prompt(`Adivinhe o número de 1 até 100`));
tentativas ++
    if ( chute < numeroSecreto ){
        console.log(`Número muito baixo`);
        alert(`Número muito baixo`);
    } else if ( chute > numeroSecreto) {
        console.log(`Número muito alto`);
        alert(`Número muitoo alto`);
    } 
}
console.log(`Acertou em ${tentativas} tentativas \n\n O número secreto é:${numeroSecreto}`);
alert(`Acertou em ${tentativas} tentativas \n O número secreto é: ${numeroSecreto}`);
console.log(`🐢`)