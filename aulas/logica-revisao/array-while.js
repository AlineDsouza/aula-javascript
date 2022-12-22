//criar um array com numeros randomicos nao repetidos
function generateRandonInteger(max){
    return parseInt(Math.random() * max)
}

let arr = []
while(arr.length <= 20){
    let randomNumber = generateRandonInteger(30)
    
    if(arr.indexOf(randomNumber)<0){
        arr.push(randomNumber)
    } else{
        console.log("Já existe no array! ", randomNumber)
    }
}
console.log(arr)