let idade = Number(prompt("Digite sua idade"));
    if ( idade <=0 ){        
        console.log("Idade inválida");
        alert("Idade inválida🐢");
    }else if (idade <=4 &&  idade >=1){
        console.log("Idade insuficiente")
        console.log("Idade insuficiente")
    } else if (idade >= 5 && idade <= 7) {
        console.log("Infantil A");
        alert("Infantil A");
    } else if ( idade >= 8 && idade  <= 10){
        console.log("Infantil B");
        alert("Infantil B");
    } else if ( idade >= 11 && idade <=13){
        console.log("Juvenil A");
        alert("Juvenil A");
    }  else if ( idade >= 14 && idade <=17){
        console.log("Juvenil B");
        alert("Juvenil B");    
    } else if ( idade >=18 && idade <=110) {
        console.log("Adulto");
        alert("Adulto");        
    } else {
        console.log("Ta morto heim?");
        alert("Ta morto heim?");
    }
    console.log("Fim do programa");
console.log(`🐢`)
