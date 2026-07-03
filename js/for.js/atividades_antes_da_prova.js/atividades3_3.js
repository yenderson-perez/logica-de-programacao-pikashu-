let peso = Number(prompt("Digite seu peso"));
let altura = Number(prompt("Digite sua altura no formato m.cm"));
let imc = peso / altura**2;

 if (imc < 0) {
    alert("Peso e altura inválidos🐢.")
} else if ( imc >=30 ){
    console.log("Obeso");
    alert("Obeso");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Peso normal.");
    alert("Peso normal");
} else { (imc < 18.5) ;
    console.log("Abaixo do peso.");
    alert("Abaixo do peso, tem derpressão, ou pq , coma mais caralhoooo🤦‍♂️")
}
console.log(`🐢`)
