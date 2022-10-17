
<script>
    let numero = prompt("Digite um número") //LOOP WHILE
    let indice = 0 

    while(indice <= 10){
        document.write( `${indice} x ${numero} = ${(indice * numero)}<br>`)
        indice++
    }
   document.write("saiu do loop while") 

   //let numero = prompt("Digite um número") 

   for (let a = 0; a <=10; a++){
    document.write( `${a} x ${numero} = ${(a * numero)}<br>`)
   }
    document.write("saiu do loop For")
    //DO WHILE
    let a = 0
    do{
        document.write( `${numero} x ${a} = ${(a * numero)}<br>`)
        a++
    } while(a <= 10)


</script>
