//2 Calcule a soma de todos os moltipls de 3 entre 1 e 100
let i;
let soma = 0;
for( i = 1; i <= 100 ; i++ ) {
    if (i % 3 === 0   ) {
        console.log(`Os multiplos de 3 de 1 a 100 são: ${i}`);
        soma = soma + i; // soma +=i;
    }
}
console.log(`A soma de todos os multiplos de 3 é: ${soma}`);
console.log(`🐢`)
