// Item 12
//
//Contexto: Um sistema acadêmico auxilia os professores no fechamento das notas ao final do bimestre. Em uma turma com 5 alunos, o docente lança as notas individualmente, e o sistema deve calcular automaticamente a média da turma a partir desses valores. Esse cálculo apoia a análise do desempenho geral antes da divulgação dos resultados.

//Comando: Implemente em JavaScript um programa que leia 5 notas (utilizando prompt()), some-as e exiba a média final com console.log().

let nota; i = 0; media = 0; soma = 0;

for (i = 1; i <=5; i++){
    nota = Number(prompt(`Digite uma Nota`));
    if ( nota >=1 && nota<=10){
        soma += nota
       
}
}
media = soma / 5;
console.log(`A média final da turma é de: ${media}`);
