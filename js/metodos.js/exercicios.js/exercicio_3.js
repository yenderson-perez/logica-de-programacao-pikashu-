//Crie um objeto Funcionrio com nome e salario. implemente um metodo aumentarSalario(porcentual);
let funcionario = {
    nome: 'Sneyder',
    salario: 1621.00,
    aumentarSalario(porcentual){
       return this.salario + (this.salario * (porcentual/100))
    }
}
console.log(
    funcionario.nome,"\n",
    funcionario.aumentarSalario(10),
    funcionario.aumentarSalario(20),
    funcionario.aumentarSalario(50),
    funcionario.aumentarSalario(70),
    funcionario.aumentarSalario(80)
)
console.log("🐢");
