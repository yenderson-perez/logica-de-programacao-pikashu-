
let uf = prompt("Digite o  UF 'Estado' de destino  do pacote").toUpperCase();
let peso  = Number(prompt("Digite o peso do pacote (kg)"))
let frete
 
if (uf === "SC" || uf === "SANTA CATARINA") {
      frete = 2.50
} else if ( uf === "SP" || uf === "SÃO PAULO" ||uf === "SAO PAULO" ||uf === "RS" || uf === "RIO GRANDE DO SUL" || uf === "RÍO GRANDE DO SUL" || uf === "PR" ||uf === "PARANA" ||uf === "PARANÁ" ){
       frete =  5.00
} else if ( uf === "AM" ||uf === "AMAZONAS" || uf === "PA" ||uf === "PARÁ" ||uf === "PARA" || uf ===  "RR" || uf === "RORAIMA") {
       frete = 12.00
} else {   frete = 7.50 
}
let resultado = peso * frete;
console.log("O frete para entregar o seu pacote no  ", uf , " é de ", resultado.toFixed(2));
alert("O frete para entregar o seu pacote no "+ uf + " é  de " + resultado.toFixed(2)); 
let decisao = prompt("Confirma a sua compra  digitando  um confirmar. Ou digite cancelar, para cancelar ").toLowerCase();      


if ( decisao === "confirmar") { 
 console.log("Obrigado, envie mais pacotes com a gente 🫶🏻");
alert("Obrigado, envie mais pacotes com a gente 🫶🏻");
} else if  (decisao === "cancelar") {
     console.log("Então  para que me fez fazer está porra de código se nem vai pagar o frete seu burro🖕🏻🙄, fiquei 3 horas fazendo")
     alert("Então  para que me fez fazer está porra de código se nem vai pagar o frete seu burro🖕🏻🙄, fiquei 3 horas fazendo")
} else { 
   console.log("🐢"); 
    alert("🐢");
}