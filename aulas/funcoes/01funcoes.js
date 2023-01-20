function parImpar (n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

//let resultado = parImpar(7)
//console.log(resultado)


function soma(n1 = 0,n2 = 0){
    return n1 +n2
}



//Fatorial 5! = 5 x 4 x 3 x 3 x 2 x 1
function fatorial (n){
    let fat = 1
    for(let c = n; c>1 ; c-- ){
        fat = fat * c
    }
    return fat
}
console.log(fatorial(5))