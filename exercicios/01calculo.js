//Exercício 
/*Faça um programa paara calcular o valor uma viagem

1 - Preço do combustível
2 - Gasto médio de combustível do carro por km
3 - Distancia em km da viagem

imprima no console o valor que será gasto em combustível para realizae essa viagem*/

const valorCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaPercorrida = 100;

const litrosConsumidos = distanciaPercorrida / kmPorLitro;
const GastoDaViagem =  valorCombustivel * litrosConsumidos;

console.log(`O gasto da viagem será de R$${GastoDaViagem.toFixed(2)}`)



