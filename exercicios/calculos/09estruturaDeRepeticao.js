//Crie im programa que dado um número imprima a tabuada

/*
const numero = 5

for (let i = 1; i <= 10; i++) {
    console.log(i* numero);
}
*/


// Crie um programa capas de percorrer uma lista de números e imprima cada numero par encontrado.

const numeros = [0,1,2,3,4,5,6,7,8,9,10]


for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
   
    if(numero %2 === 0){
        console.log(`É par ${numero}`)        
    }
}