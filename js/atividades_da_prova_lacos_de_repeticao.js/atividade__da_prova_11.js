// Item 11
//
//Contexto: A tela de login de um sistema web adota uma política de segurança que limita o número de tentativas de senha, a fim de dificultar acessos indevidos. São permitidas no máximo 3 tentativas, e a senha correta cadastrada é "1234". A cada tentativa, o sistema solicita a senha ao usuário e encerra a verificação assim que ela for informada corretamente ou quando o limite de tentativas se esgotar.
//
//Comando: Implemente em JavaScript um programa que solicite a senha ao usuário (utilizando prompt()) por até 3 tentativas, encerre a verificação caso a senha correta seja informada e exiba ao final se o acesso foi liberado ou bloqueado, utilizando console.log().
 let senha;
 let i;
 let tentativa = 0;
 for ( i=1; i<=3; i++){
    senha = Number(prompt(`Digite a sua senha.
        Tem 3 tentativas.`))
     if (senha == 1234 && tentativa <= 3){
        console.log(`A senha é correta.
        Acesso liberado.`);
        
        break;
     } else if ( senha !== 1234 ){
        console.log(`Senha incorreta`);
      tentativa++  
     } else if (tentativa == 3){
        console.log(`Acesso Bloqueado`);
     }
    
}
console.log(`🐢`);