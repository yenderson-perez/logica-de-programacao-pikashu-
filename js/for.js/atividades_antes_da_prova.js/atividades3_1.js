let media = Number(prompt("Digite a media final da sua nota"));
let frequencia = Number(prompt("Digite a sua cuantidade de faltas na materai"));
let aulas = Number(prompt("Digite o total de aulas ministradas da materia"));

 let  resultado = (((aulas - frequencia)*aulas)/100); 
 
 
 if (resultado <= 74 && media <= 6){
    console.log("Alumno reprovado por faltas e pela nota");
    alert("Alumno reprovado por faltas e pela nota");
} else if (resultado <= 74 && media >=7){
     console.log("Aluno reprovado por frequência");
    alert("Aluno reprovado por frequência");
} else if (resultado >= 75 && media <=6){
   console.log("Aluno reprovado pela nota");
   alert("Aluno reprovado pela nota");
}else if (resultado >= 75 && media >= 7) {
    console.log("Aluno aprovado");
    alert("Aluno aprovado");
} else {
    console.log("Algum dado foi inválido");
    alert("Algum dado foi inválido 🐢");
}

console.log(`🐢`)

 
