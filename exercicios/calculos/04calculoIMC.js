//Exercício IMC

/* Fórmula IMC: peso / (altura* altura) 

Elabore um algoritmo que dado o peso e altura de uma adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
-abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 Peso normal
- Entre 25 e 30 Acima do peso
- Entre 30 e 40 Obeso
-Acima de 40 Obesidade grave

*/

const peso = 54
const altura = 1.50

const mediaImc = peso / (altura*altura)

if(mediaImc <18.5){
    console.log(`Seu IMC é de ${mediaImc.toFixed(2)}, ABAIXO DO PESO`)
} else if (mediaImc >=18.5 && mediaImc <25){
    console.log(`Seu IMC é de ${mediaImc.toFixed(2)}, PESO NORMAL`)
}else if (mediaImc >=25 && mediaImc <30){
    console.log(`Seu IMC é de ${mediaImc.toFixed(2)}, ACIMA DO PESO`)
}else if (mediaImc >= 25 && mediaImc <40){
    console.log(`Seu IMC é de ${mediaImc.toFixed(2)}, OBESO`)
}else{
    console.log(`Seu IMC é de ${mediaImc.toFixed(2)}, OBESIDADE GRAVE`)
}