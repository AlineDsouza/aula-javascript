//RECURSIVIDAD
function recursiva(n){
    if(n==1){
        return 1
    } else{
        return n * recursiva(n-1)
    }

}
console.log(recursiva(5))






// fatorial
/*
function fatorial1(n){
    if( n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}
 */



//fatorial
 function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat * c
    }
    return fat
 }
 console.log(fatorial(5))
