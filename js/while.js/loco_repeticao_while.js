let opcao = -1
while (opcao !== 0) {
    opcao =Number(prompt(`Digite uma opção \n 1-Saudação \n 2- Data de hoja \n 0- Encerrar`));
        if (opcao === 1 ){
            console.log("Olá Mundo");
        } else if (opcao === 2) {
            console.log(new Date().toLocaleDateString("pt-Br"));
        }  else if (opcao !== 0){
         console.log("Opção Invalida seu burro");
        }
            
        
}
console.log(`🐢`)