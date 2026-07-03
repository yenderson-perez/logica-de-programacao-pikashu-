//Item 6
//
//**Contexto:** Uma ferramenta de monitoramento acompanha o consumo de memória de um servidor em tempo real, auxiliando na prevenção de falhas por sobrecarga. A leitura inicia em 0% e, segundo o cenário analisado, cresce de forma constante 2% a cada minuto de operação. A equipe de infraestrutura precisa estimar o tempo até a saturação, ou seja, em quantos minutos o uso atingirá ou ultrapassará 100% da capacidade.
//
//**Comando:** Implemente em JavaScript um programa que, partindo de 0% e somando 2% a cada repetição, conte e exiba quantos minutos são necessários para o valor atingir ou ultrapassar 100%, utilizando console.log().


let consumo = 0;
let minutos = 0;

while (consumo < 100) {
  consumo += 2;
  minutos++;
}

console.log(`O uso de memória atinge ou ultrapassa 100% em ${minutos} minutos.`);
console.log(`🐢`)