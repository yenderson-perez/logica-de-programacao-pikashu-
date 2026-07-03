 let i;
// for( i = 1 ; i <=10 ; i++){
//     console.log("interação: " , i );

// }
// console.log("\n");
// console.log("Decremento");
//     for(i = 5 ; i >=0 ; i--){
//         console.log("interação: " , i); 
//     }
// console.log("Numero Pares 0 até 100");
//     for( i = 0; i <= 100; i +=2) {
//     console.log(i);

// }
// console.log("\n");
// //OU
// for(i = 0; i <= 100; i++){
//     if( i % 2 === 0 ){
//         console.log(i);
//     }
//  }

console.log("\n");
console.log("Tabuada do 7");
let numero = 7 ;
let resultado ;
for ( i = 0 ; i <= 10 ; i++) {
    resultado = numero * i;
    console.log(numero, "x" , i , "=" , resultado);
}

console.log("\n");
console.log("Fatorial 1 até infinito");
let n = 10;
let fatorial = 1
for (i = 1 ; i <= n; i++){
    fatorial = fatorial * i ;
    //fatirial *= i;
}
console.log(`Fatorial de ${n} = ${fatorial}`);
//console.log("Fatorial de " , n, '=' , fatrial);

console.log("\n");
console.log("Soma e media de N números");
let num = 3;
let soma = 0;
let media = 0;
for(i = 1 ; i <=num ; i++){
let valor = Number(prompt(`Digite ${i}º número:`));
 soma += valor;
//soma = soma + valor ;
 media = soma / num ;
}
console.log(`O resultado da soma é : ${soma}`);
console.log(`A média é ${media.toFixed((2))} `);
console.log(`🐢`)