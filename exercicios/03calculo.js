//Exercício
/*
1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3 ) / 3;

Classificação:
- Média menor que 5, reprovado
- Média entre 5 e 7, recuperação
- Média maior que 7, aprovado
*/

const nota1 = 5
const nota2 = 15
const nota3 = 1

const mediaEscolar = (nota1 + nota2 + nota3) / 3

if (mediaEscolar <5){
    console.log(`Sua nota é ${mediaEscolar.toFixed(2)}, REPROVADO`)
}else if(mediaEscolar>=5 && mediaEscolar<=7){
    console.log(`Sua nota é ${mediaEscolar.toFixed(2)}, RECUPERAÇÃO`)
}else if (mediaEscolar >7){
    console.log(`Sua nota é ${mediaEscolar.toFixed(2)}, APROVADO`)
}
else{
     console.log('nada aqui')
}