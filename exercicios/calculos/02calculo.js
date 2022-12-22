//Exercício 

/*Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis sendo elas:

1 - Preço do Etanol
2 - Preço da gasolina
3 - O tipo de combustível que está no seu carro 
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Imprima o valor que será gasto para realizar esta viagem
*/ 

//let tipocombustivel = etanol

const etanol = 3.90
const gasolina = 5.79
const kmPorLitro = 10
const distanciaPercorrida = 100
let tipocombustivel ='Etanol'

const litrosConsumidos = distanciaPercorrida / kmPorLitro


if(tipocombustivel === 'Etanol'){
    const gastoDaViagem = litrosConsumidos * etanol   
    console.log(`O gasto da viagem com Etanol será de ${gastoDaViagem.toFixed(2)}`)
}else {   
    const gastoDaViagem = litrosConsumidos * gasolina
    console.log(`O gasto da viagem com gasolina será de ${gastoDaViagem.toFixed(2)}`)
}