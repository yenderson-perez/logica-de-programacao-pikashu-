let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite outro numero"));

     if ( numero1 > numero2 ){
        console.log(numero1,"é maior");
        alert(numero1 + " é maior");
     } else if (numero2 > numero1) { 
        console.log( numero2 , " é maior");
        alert( numero2 + " é maior");
      }  else if ( numero1 = numero2 ) {
        console.log("Os dois numeros são iguais");
        alert("Os dois numeros são iguais");       
      } else {
        console.log("Algum dos numeros são inálidos, tente novamente");
        alert("Algum dos numeros são inálidos, tente novamente🐢");
    }
console.log("Fim do programa");
console.log(`🐢`)
