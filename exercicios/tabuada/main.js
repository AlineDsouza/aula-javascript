//Pegando uma referencia no html e armazenando em uma variavel output
//Fazendo assim a ponte entre o html e o js atraves do ID 
 /*
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
*/
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else{ 
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}