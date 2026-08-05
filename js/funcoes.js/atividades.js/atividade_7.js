//#### **ITEM 7**
//**Contexto:** O formulário de cadastro de um sistema web exige que a senha escolhida pelo usuário tenha, no mínimo, 8 caracteres, como medida básica de segurança. Essa validação é utilizada tanto no cadastro quanto na troca de senha, por isso foi implementada como uma função reutilizável que informa se a senha atende ao critério estabelecido.
//**Comando:** Implemente em JavaScript uma função chamada senhaValida, que receba uma senha em formato de texto e retorne um valor booleano indicando se ela possui 8 caracteres ou mais. Em seguida, chame a função e exiba o resultado com console.log().

function senhaValida (senha){
    return senha.length >= 8;
}
let resultado = senhaValida ("abcd676766");
console.log(resultado);

console.log(`🐢`)