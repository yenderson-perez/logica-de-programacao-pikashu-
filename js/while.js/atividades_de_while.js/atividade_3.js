//3  Implemente o jogo de adivinhaçáo ,maas com limite de 7 tentativas. se errar todas , exiba 'Game Over! O número era X'
const numeroSecreto = Math.floor(Math.random()*100 + 1 );
let chute =  0;
let tentativas = 0;
let limite = 7;
 while( tentativas < 7 && limite > 0) {
    
    chute = Number(prompt(`Adivinhe o número de 1 até 100`));
    limite--
    if ( chute < numeroSecreto ){
        console.log(`Número muito baixo`);
        alert(`Número muito baixo`);
        tentativas ++
    } else if ( chute > numeroSecreto) {
        console.log(`Número muito alto`);
        alert(`Número muitoo alto`);
        tentativas ++
    } else if ( numeroSecreto = chute) {
        console.log(`Acertou em ${tentativas} tentativas \n\n O número secreto é:${numeroSecreto}`);
        alert(`Acertou em ${tentativas} tentativas \n O número secreto é: ${numeroSecreto}`);
    }

}
console.log(`Game over!, tentavas acabadas\n O número é: ${numeroSecreto}`);
alert(`Game over! tentativas acabadas \n O número é: ${numeroSecreto}`);
console.log(`🐢`)

