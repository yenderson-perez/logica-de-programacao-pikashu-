//2. filtro de notas: leia 10 notas com for. use continue para ignorar notas invalidas ( < 0 ou > 10 ) e calcule a media apenas das validas 
let i , soma = 0, contadorDeNotasValidas = 0 , media = 0;
for ( i = 1; i <= 10 ; i++ ) {
         let nota = Number(prompt(`Digite uma nota `));
         if ( nota < 0 || nota > 10) {
            console.log(`Nota inválida`);
            continue;
         } 
  soma = soma + nota;
   contadorDeNotasValidas++;
}
media = soma / contadorDeNotasValidas;
console.log(`Media é ${media}`);
console.log(`🐢`)
