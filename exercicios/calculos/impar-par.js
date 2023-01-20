//imprime se o resultado é impar ou par
function decidir(n){
    if( n%2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
} console.log(decidir(25))


//soma os parametros
function soma(n1= 0, n2 =0){
    return n1+n2
}
console.log(soma(2,5))



//função dentro de uma variável
let v = function(x){
    return x*2
} 
 console.log(v(5))


 