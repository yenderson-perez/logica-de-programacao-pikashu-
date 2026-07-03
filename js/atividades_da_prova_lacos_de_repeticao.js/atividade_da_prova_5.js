// Item 5
//
//Contexto:** Durante o envio de arquivos em um site, uma barra de progresso informa ao usuário o percentual já concluído do upload, recurso importante para a experiência de uso. Para fins de simulação, a atualização ocorre em intervalos fixos, partindo de 0% e avançando de 10 em 10 por cento até alcançar 100%. Esses valores de progresso devem ser apresentados em sequência no console.
//
//**Comando:** Implemente em JavaScript um programa que exiba no console os percentuais de progresso de 0 a 100, de 10 em 10, utilizando console.log().
for(let  progresso = 0; progresso<=100; progresso+=10){
    console.log(`Progresso atual ${progresso}%`);
}
console.log(`🐢`)