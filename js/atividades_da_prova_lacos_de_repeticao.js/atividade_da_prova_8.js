// Item 8
//Contexto: Em um site de sorteios promocionais, os números de 1 a 30 são distribuídos entre os participantes da campanha. Por regra do regulamento, os múltiplos de 5 ficam reservados para brindes especiais e não participam do sorteio comum. Dessa forma, a lista de números disponíveis aos participantes deve conter todos os valores do intervalo, com exceção desses múltiplos.
//Comando: Implemente em JavaScript um programa que exiba no console todos os números de 1 a 30, exceto os múltiplos de 5, utilizando console.log().
let i;
for(i=1; i<=30; i++){
    if( i % 5 == 0){
        continue;
    } else if (i % 5 != 0){
        console.log(`Numero do sortei = ${i}`);
    }
}