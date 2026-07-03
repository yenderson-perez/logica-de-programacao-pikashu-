 const numero1 = 50;
 const numero2 = parseInt('35'); //Number ("35")
 const numero3 = parseFloat("35.50");  // Number ("35.50")
// let resultado             

// //Soma (+)
 resultado = numero1 + numero2;
 console.log('numero1 + numero2:' + resultado);
 resultado = numero1 + numero3;
 console.log('numero1 + numero3:', resultado);

// Subtração
 resultado = numero1 - numero2;
 console.log("numero1 - numero2" , resultado);
 console.log(numero1 - "50.50");

//Divisão(/)
resultado = numero1 / numero2;
console.log("numero1 / numero2 =" , resultado);
console.log("numero1 / nummero2 =" , resultado.toFixed(2));

//Resto da divisão
resultado = numero1 % numero2;
console.log("numero1 % numero2 =", resultado);

//Multiplição(*)
resultado = numero1 * numero2;
console.log("numero1 * numero2 =" , resultado);
console.log("numero1 * nummero2 =" , resultado);

//Potenciação
resultado = numero1 ** 3
console.log("numero ** 3 =" , resultado);
   
//CASO ESPECIAL numero2/0
console.log(5/0);

// NaN Not a number
console.log(2/ "a");
console.log(2 / resultado);
console.log(resultado);
console.log(`🐢`)