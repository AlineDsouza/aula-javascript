//Exercício: Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
//Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

/*código condições de pagamento
1-À vista Débito, recebe 10% de desconto;
2-À vista Dinheiro ou PIX, recebe 15% de desconto
3-Em duas vezes, preço normal de etiqueta sem juros
4-Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)))
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)))
}


const precoEtiqueta = 100
const tipoPagamento = 4

//Débito
if(tipoPagamento ===1){
    console.log(aplicarDesconto(precoEtiqueta, 10))
}
//Dinheiro / PIX
else if (tipoPagamento===2) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
}
//Parcelamento 2vezes
else if (tipoPagamento===3){
    console.log(`Parcelamento selecionado, 2 vezes sem juros, o valor da peça é de R$${precoEtiqueta} reais`)
} 
//Parcelamento mais de 2 vezes
else{
    console.log(aplicarJuros(precoEtiqueta, 10))
}

