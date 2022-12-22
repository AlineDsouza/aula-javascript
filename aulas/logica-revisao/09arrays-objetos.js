//array de pessoas

const pessoas = [ {
    nome: "Daniel",
    idade: 40
}, {
    nome: "Maria",
    idade: 18
},{
    nome: "Helena",
    idade: 50
},{
    nome: "Joao",
    idade: 45
}
]
for(let i =0; i<pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}