/*Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura.
Instancie uma pessoa chamada José que tenha 70kg de peso 1.75 de altura e peça ao José para dizer o valor do seu IMC.
*/
class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    calcularImc(){
        return this.peso / (this.altura*this.altura)
    }
    classificarImc(){
       const imc = this.calcularImc();
       if (imc<18.5){
        return (`Seu IMC é de ${imc}, abaixo do peso`)
       } else if(imc>18.5 && imc<=25){
        return (`Seu IMC é de ${imc}, peso normal`)
       } else if(imc>25 && imc<=30){
        return (`Seu IMC é de ${imc}, acima do peso`)
       } else if(imc>30 && imc<=40){
        return (`Seu IMC é de ${imc}, obeso`)
       } else{
        return (`Seu IMC é de ${imc}, obesidade grave`)
       }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose.classificarImc())
const aline = new Pessoa('ALine',55,1.55)
console.log(aline.classificarImc())
