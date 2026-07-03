// Crie um programa que ê a nota de um aluno e axibe'Aprovado' ou 'Reprovado'. A nota tem que ser maior ou igual que 7.0.
let nota = Number(prompt("Digite a sua nota"));
if (nota < 0 || nota > 10 ) {
    alert("Nota Invalida"); 
    alert("seu burro")
}   
 else if (nota>=7) {
    alert("Aluno Aprovado");
    alert("É o minimo né ")
} else if (nota <=6){
    alert("Aluno Reprovado");
    alert("parabens seu burro")
} 
 
console.log(`🐢`)
