let vitorias = 0, jogarNovamente;
do{
    let numeroSecreto = Math.floor(Math.random() *10) + 1;
    let chute = Number(prompt(`Adivinhe o numero de 1 a 10`));
    if(chute === numeroSecreto) {
        console.log(`Você acertou o número secretro`);
        vitorias++;
    } else {
        console.log(`Você errou secreto ( seu burro 🤦‍♂️) \n O número secreto era ${numeroSecreto}`);
        derrotas++;
    }
    jogarNovamente = prompt(`Deseja jogar novamente ? (sim/não)(s/n)`);
} while (jogarNovamente.toLowerCase() === `sim` || jogarNovamente.toLowerCase() === "s");
console.log(`Fim do jogo! total de vitórias: ${vitorias} \n
    total de derrotas: ${derrotas}`)
    console.log(`🐢`)