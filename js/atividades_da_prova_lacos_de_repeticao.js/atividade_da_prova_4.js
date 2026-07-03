// Item 4
//Contexto: Um site de exercícios de matemática voltado a estudantes do ensino fundamental oferece um recurso interativo que apresenta a tabela de multiplicação de um número escolhido. A ferramenta serve de apoio à memorização das operações e deve exibir, de forma organizada, os produtos desse número pelos fatores de 1 a 10. O número a ser estudado é definido previamente e armazenado pelo sistema.
//
//Comando: Implemente em JavaScript um programa que, a partir de um número armazenado em uma variável (por exemplo, 7), exiba sua tabuada de 1 a 10 no formato "7 x 1 = 7", utilizando console.log().

let numero =Number(prompt(`Digite um numero`))
let i;
let resultado;
 for( i=1; i<=10; i++ ){
     resultado = i * numero;
     console.log( i + " x "  + numero + " = "   + resultado)
}

console.log(`🐢`)