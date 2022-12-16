/*function escrevaSeuNome (nome){
    console.log(`Seu nome é ${nome}`)
}
escrevaSeuNome('Zulema')
escrevaSeuNome('Xena') 

function verificarIdade(idade){
    if (idade >=18){
        console.log('Maior de idade')
    }else{
        console.log('Menor de idade')
    }
}
verificarIdade(11)
*/

//Declaração de função
function ola() {
    console.log('Estou dentro de uma função')
}
ola()

//Expressao de função

const ola2 = function(){
    console.log('Estou dentro de uma expressao de função')

}
ola2()

//Arrow function
const ola3 = () => {
    console.log('Estou dentro de uma Arrow Function')
}
ola3()


//retorno de valores
function obtemDiaSemana (){
    return new Date().getDay()
}

console.log(obtemDiaSemana())

if(obtemDiaSemana()===5){
    console.log('Sexta!')
}



//Função recebendo valores

function soma(n1 = 0,n2 = 0){
    return n1 + n2
}
console.log(soma(1,1))
console.log(soma())