// parseInt coverte a numero inteiro
let  opcao = -1;
while (opcao !== 0) {
    let temperaturaAtual;
    let temperatura = parseFloat(prompt(`Digite a temperatura`)); // parseFloat converte um numero a decimal
    opcao = parseInt(prompt(`Digite a opção para coverção:  
    1-De Celsius para Fahrenheit \n
    2-De Fahrenheit para Celsius \n
    0-Para Sair`));
    if ( opcao === 1 ){
        temperaturaAtual = temperatura * 1.8 + 32 ;
        
    }  else if (opcao === 2) {
        temperaturaAtual = ( temperatura - 32 ) / 1.8 ;
    } else if (opcao !== 0) {
        temperaturaAtual = `Opção Invalida` ;
    }
    console.log(`A temperatura atual é ${temperaturaAtual}`);
    alert(`A temperatura atual é ${temperaturaAtual}`);
}
console.log(`🐢`)