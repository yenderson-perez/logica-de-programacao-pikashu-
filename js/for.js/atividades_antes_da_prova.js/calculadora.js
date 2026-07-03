//Dois Números; Operadores Aitmeticos (+ - / %  * **)
const numero1 = Number(prompt("Digite o primeiro número"));
const operador = prompt("Digite o operador aritmetico");
const numero2 = Number(prompt("Digite o segundo número"));
let resultado;

switch (operador){ 
    case '+' : // soma
         resultado = numero1 + numero2
        break;
    case '-': // resta
         resultado = numero1 - numero2    
        break;
    case '/': // divisão
         resultado = ( numero2 === 0)
        ? 'Erro: Não existe divisão por zero, seu burro 🤦‍♂️!!'
        : numero1 / numero2; 
        break;
     case '%': // resto da divisão
         resultado = ( numero2 === 0)
        ? 'Erro: Não existe divisão por zero, seu burro 🤦‍♂️!!'
        : numero1 / numero2; 
        break;
    case '*' : // multiplicação
         resultado = numero1 * numero2;
        break;
    case '**':// ponteiciação
    case '^':             
         resultado = numero1 ** numero2;
    break;
    case 'raiz':
         resultado = numero1 ** (1/numero2);
    break;




}
alert(resultado).toFixed(2);
console.log(`🐢`)
