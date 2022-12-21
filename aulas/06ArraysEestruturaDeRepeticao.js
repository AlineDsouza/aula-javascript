/*const aluno = ['joao','vitor', 'marina'];

aluno.push('Aline') //adicionar dinamicamente
aluno[1] = 'Vinicius' //aicionar diretamente a posição


console.log(aluno) */

/*const notas = [];

notas.push(5);
notas.push(5);
notas.push(5);
notas.push(5);
notas.push(2);

console.log(notas.length);
*/

/*const nome = 'Aline'

for(let i = 0; i<nome.length; i++){ // variavel; condiçao; incremento;
    console.log(nome[i]);
} */

/*const notas =[]

notas.push(5)
notas.push(6)
notas.push(8)
notas.push(5)
notas.push(5)
notas.push(5)

let soma = 0

for (let i = 0; i <notas.length; i++) {
    const nota = notas[i];
    soma = soma +nota
}

const media = soma / notas.length
console.log(media.toFixed(2))
*/

//Iterar arrays
const nomes = ['Maria', 'Jose', 'Daniel']

for( let i = 0; i<nomes.length; i++){
   // console.log(`${i}: Nome é ${nomes[i]}`)
}

//Iterar objetos
const pessoa = {
    nome: 'Maria',
    idade: 28,
    email: "maria2@email.com"
}
console.log(pessoa)
for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
    
}