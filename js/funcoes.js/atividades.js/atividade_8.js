//#### **ITEM 8**
//**Contexto:** Um sistema acadêmico calcula a média final dos alunos considerando um número variável de avaliações, já que cada disciplina pode adotar uma quantidade diferente de provas e
//Lógica de Programação — Funções | Página 3
//trabalhos ao longo do período letivo. Por esse motivo, a função responsável pelo cálculo precisa aceitar uma quantidade flexível de notas.
//**Comando:** Implemente em JavaScript uma função chamada calcularMedia, que receba uma quantidade variável de notas utilizando parâmetro rest e retorne a média entre elas. Em seguida, chame a função com um conjunto de notas de teste e exiba o resultado com console.log().

function calcularMedia(...notas) {
    let soma = 0;

    for (let nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}


let media = calcularMedia(8, 7.5, 9, 10);

console.log(`Média: ${media}`);