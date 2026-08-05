//#### **ITEM 3**
//**Contexto:** O departamento de recursos humanos de uma empresa concede bonificações aos funcionários com base em um percentual sobre o salário. Como a maior parte dos casos utiliza um percentual padrão de 5%, mas alguns contratos preveem percentuais diferentes, o sistema de folha de pagamento precisa de uma função que calcule esse valor e permita, quando necessário, informar um percentual específico.
//**Comando:** Implemente em JavaScript uma função chamada calcularBonus, que receba os parâmetros salario e percentual, sendo o percentual um parâmetro com valor padrão de 5, e retorne o valor do bônus. Em seguida, chame a função e exiba o resultado com console.log().

function calcularBonu(salario, porcentual = 0.05){
    return salario * porcentual;
}
let bonus = calcularBonu(1600);

console.log(bonus);






console.log(`🐢`)