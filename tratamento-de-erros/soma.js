function soma(n1, n2){
    if(typeof n1 !== "number" || typeof n2 != "number"){
        throw Error("Aceita apenas numeros")
    }
    return n1+n2
}

