//Exercicios: BRAK e CONTINUE 
//1. Exiba os numeros de 1 a 100, pulando multipls de 4 (continue);e parando no primero multiplo de 17 mair que 50 (break);
let i ;  
 for ( i = 1; i <= 100; i++) {
        if ( i % 4 !== 0) {
            console.log(i);
            continue;
        } else if (i % 17 == 0 && i >=50 ) {
            console.log(i)
            break;
        }
}
console.log(`🐢`)
