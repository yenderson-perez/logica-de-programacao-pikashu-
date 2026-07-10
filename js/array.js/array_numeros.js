let numeros = [ 10 , 1 ,  21 , 3 , 100];
numeros.sort();
console.log(numeros);
//[ 1, 10, 100, 21, 3 ]
console.log('\n');

numeros.sort((a, b ) => a - b);
//[ 1, 3, 10, 21, 100 ]
console.log(numeros);
console.log('\n');

numeros.sort((a, b) => b - a);
//[ 100, 21, 10, 3, 1 ]
console.log(numeros);
console.log('\n');






console.log(`🐢`)