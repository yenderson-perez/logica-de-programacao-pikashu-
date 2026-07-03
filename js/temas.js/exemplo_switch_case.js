let dia = Number(prompt('Digite o numero do dia'  ));
let nomeDia
 
switch (dia) {
    case 1:
        nomeDia = 'Domingo';
        break;
    case 2:
            nomeDia = 'Segunda-Feira';
        break;
    case 3:
            nomeDia = 'Terça-feira';
        break;
    case 4:
        nomeDia =  'Quarta-feira';
        break;
    case 5:
            nomeDia = ' Quinta-feira';
        break;
    case 6:
        nomeDia = 'Sexta-feira';
        break;
    case 7:
            nomeDia = 'Sabado';
          break;
        default:
            nomeDia = 'Número inválido';
          break;
}          

console.log("Dia: " + nomeDia);
console.log(`🐢`)