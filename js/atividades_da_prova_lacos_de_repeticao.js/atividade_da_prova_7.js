// Item 7
//Contexto:** O sistema de uma agência de atendimento distribui senhas numeradas sequencialmente aos clientes que aguardam na fila. As senhas de número par direcionam o atendimento ao caixa preferencial, enquanto as de número ímpar são encaminhadas ao caixa comum. Para a faixa de senhas de 1 a 20, o painel precisa listar cada número indicando a qual tipo de atendimento ele corresponde.
//**Comando:** Implemente em JavaScript um programa que percorra os números de 1 a 20 e exiba, para cada um, se a senha é "par" ou "ímpar", utilizando console.log().
let i;
for(i=1; i<=20; i++){
    if( i % 2 == 0){
        console.log(`Caixa preferencial, numero ${i}`);
    } else if (i % 2 != 0){
        console.log(`Caixa comun, número ${i}`);
    }
}
console.log(`🐢`)