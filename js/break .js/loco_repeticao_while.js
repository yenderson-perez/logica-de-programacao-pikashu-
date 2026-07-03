let produto = 0, total = 0, precoDoProduto = 0;
    while (true) {
    let entradaCompra = prompt(`Producto: ${produto+1} -Digite o preço do producto ou fim para finalizar`);
    if (entradaCompra.toLowerCase() === 'fim'){
        break;
    }
    precoDoProduto = parseFloat(entradaCompra);
    if (isNaN (precoDoProducto) || precoDoProduto < 0){
        console.log(`Preço inálido`);
        continue;
    } 
    total = total + precoDoProduto;
    produto++;
    console.log(`Sutotal ${produto} productos
        R$${total.toFixed(2)}`);

}
console.log(`Total final da compra: $${total.toFixed(2)} , 
Foram comprados ${produto} produtos`);
console.log(`🐢`)

