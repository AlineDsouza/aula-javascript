/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto médio de combustível por km rodado.

Crie um método que dado a quantidade de km e preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * (this.gastoMedioPorKm * precoCombustivel)
    }
}

const uno = new Carro ('Fiat', 'Azul', 1 / 12)
console.log(uno)
console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2))

const jeep =new Carro ('jeep', 'verde', 1/10)
console.log(jeep)
console.log(jeep.calcularGastoDePercurso(70,5))