// 3 leai N notas e calcule a media , a maior nota e a menor nota.
let  n = 4, soma , media = 0, menor , maior , i;
    for(  i = 1; i <= n; i++) {
        let nota = Number(prompt(`Digite a ${i}ª nota:`));
        soma = soma + nota ;
        //soma+=nota
        if (i === 1) {
            menor = nota ;
            maior = nota ;
        } else if ( nota > maior){
            maior = nota;
            
        }  else if (nota < menor ) {
            menor = nota ;

        } 
    } 
media = soma / n ;
console.log(`A média é: ${media.toFixed(2)}`);
console.log(`Menor nota: ${menor}`);
console.log(`Maior nota: ${maior}`);


console.log(`🐢`)

