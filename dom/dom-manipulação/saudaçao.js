/*(function(){
    const nomeUser = "Aline"
    document.getElementById('bemvindo').textContent =  `Bem vindo(a), ${nomeUser}`
   
})()
*/
(function(){
    const nomeUser = null
    const elemento = document.getElementById('bemvindo')   
    if(nomeUser){
        elemento.textContent += nomeUser
    } else{
        //remover elemento do DOM
      // elemento.remove()    mas não funciona no Internet explore

    }
    
})()