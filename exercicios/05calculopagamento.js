//Exercício: Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
//Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

/*código condições de pagamento
1-À vista Débito, recebe 10% de desconto;
2-À vista Dinheiro ou PIX, recebe 15% de desconto
3-Em duas vezes, preço normal de etiqueta sem juros
4-Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoEtiqueta = 100
const tipoPagamento = 2

//Débito
if(tipoPagamento ===1){
    console.log( `Débito selecionado, você ganhou 10% de desconto! O valor da peça agora é R$ ${(precoEtiqueta) - (precoEtiqueta*0.1)} reais`)
}
//Dinheiro / PIX
else if (tipoPagamento===2) {
    console.log(`Dinheiro/Pix selecionado, você ganhou 15% de desconto! O valor da peça agora é R$${ (precoEtiqueta) - (precoEtiqueta * 0.15)} reais`)
}
//Parcelamento 2vezes
else if (tipoPagamento===3){
    console.log(`Parcelamento selecionado, 2 vezes sem juros, o valor da peça é de R$${precoEtiqueta} reais`)
} 
//Parcelamento mais de 2 vezes
else{
    console.log(`Parcelamento com juros, será acrescentado 15% de juros ao valor da peça. Valor final é de R$${(precoEtiqueta*0.1) + (precoEtiqueta)} reais`)
}
