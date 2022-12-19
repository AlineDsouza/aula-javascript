//Pegando uma referencia no html e armazenando em uma variavel output
//Fazendo assim a ponte entre o html e o js atraves do ID 

const output = document.getElementById("output")

function mostrarTabuada(){
    let n = Number(prompt("Digite um número"))   
    msg = ""

    for(let i = 0; i <= 1000; i++){
        msg += `${n} x ${i} = ${(n*i)} <br>`        
    }
    output.innerHTML = msg
}

function limparTabuada(){
    output.innerText = "LIMPOU"
}
