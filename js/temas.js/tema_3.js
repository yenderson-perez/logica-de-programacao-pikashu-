// Crie um programa  que lê dois números, e exxibe qual e maior ou a mensagem "São Iguais" se forem iguais 
let numero1 = Number(prompt("Digite um Número")); 
let numero2 = Number(prompt("Digite um Número"));
if (numero1<numero2){
    console.log( numero2, (' é maior que ') , numero1 );
    alert(numero2 + ' é maior que ' + numero1);
} else if (numero1>numero2){
    console.log(numero1,(" é maior que ")  ,numero2);
    alert(numero1 + ' é maior que ' + numero2);
} else {
    console.log(numero1, (" é igual que ")   , numero2);
    alert(numero1 + " é igual que " + numero2);
}
console.log(`🐢`)