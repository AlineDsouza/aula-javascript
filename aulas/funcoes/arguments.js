//argumentes não funcionam em arrow funcions
function somar(){
    console.log(arguments)
    let total = 0;

    for(let i = 0; i<arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(somar(1,3,8,53,3))

