let peso = Number(prompt("Digite seu peso"));
let altura = Number(prompt("Digite sua altura no formato m.cm"));
let imc = peso / altura**2;

 if (imc < 0) {
    alert("Peso e altura inválidos.")
} else if (imc >= 40) {
    alert("Obesidade Grau 3.")
    alert("gordo pra caralho né 😒")
} else if (imc >= 35 && imc < 40) {
    alert("Obesidade Grau 2.")
    alert("gordo né deixa de comer 👍")
} else if (imc >= 30 && imc < 35) {
    alert("Obesidade Grau 1")
    alert("ve cê  deixa de comer 😘")
} else if (imc >=25 && imc < 30) {
    alert("Sobrepeso.")
    alert("foi a janata de ontem né?👌")
} else if (imc >= 18.50 && imc < 25) {
    alert("Normal.")
    alert("q bommmm ❤️❤️")
} else if (imc < 18.50) {
    alert("Magro.")
    alert(" tem derpressão, ou pq , coma mais caralhoooo🤦‍♂️")
}
console.log(`🐢`)