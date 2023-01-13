/* Exercício
 Terá tres entradas do usuárui
 
 onde o usuario digita o numero de inicio
 digita o numero de fim
 digita de qual o intervalo dessa contagem

 exibe os numeros no final

 */

 function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let intervalo = window.document.getElementById('intervalo')
    let res = window.document.querySelector('div#res')

    // reatribuindo e fazendo conversao de tipo
    if(inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0){
       window.alert('[ERRO], faltam dados!')
      } else{
         
         res.innerHTML = `Contando: <br>`
         let  i = Number(inicio.value)
         let f = Number(fim.value)
         let inter = Number(intervalo.value)
         
         if(inter <= 0){ 
         window.alert('invalido, considerando 1 no lugar')
         inter = 1
         }
         
         if (i < f) {
            //contagem crescente
            for (let c = i; c<= f; c+=inter) {  
                 res.innerHTML += ` ${c}	\u{1F449} `  
            }           
         } else{
            //contagem descrescente
            for(let c = i; c>=f; c-=inter){
               res.innerHTML += `${c} \u{1F449}`
            }
         }

   }

 }