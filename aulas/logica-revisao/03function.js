// um conjunto de instruções que executa uma tarefa

/*function funcao(){   //declarando uma função
    console,console.log('Tudo certo');
}
funcao();  //chamando uma função



//Funções com parâmentros    exemplo abaixo
    function nomeDaFuncao(parametro){
    ${instrução};
}

    nomeDaFuncao(valorDoParametro);  

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);

}
mensagem('tudo certo', 'amigo'); */



   /*  //Declaração de função
        function ola (){
            document.write("Isto é uma função!")
        }
        ola()

        //expressão de função
        const ola2 = function(){
            console.log("Função de expressão")
        }
        ola2()

        //Arrow functions
        const ola3 = () => {
            console.log("Função arrow function")
        }
        ola3()

        //retorno de valores
        function diaSemana (){
            return new Date().getDay()
        }
        console.log(diaSemana())


        //Recebendo valores
        function somar(n1, n2){
            return n1 + n2
        }
        let soma = somar(3, 5)
        console.log(soma)

        console.log(somar(2,1))
        alert(somar(1,2))

        // Aula 
        */

        function quadrado(valor){
           return valor*valor
        }
        const quadradoDeDez = quadrado(10)
        console.log(quadradoDeDez)



    function incrementarJuros(valor, percentualjuros){
        const valorDeAcrescimo = (percentualjuros /100 ) * valor
        return valor + valorDeAcrescimo
    }
    console.log(incrementarJuros (100, 10))
    console.log(incrementarJuros (100, 15))

    //modelo

    function calcularJuros(){

    }

    function main(){
        console.log('Programa principal')
        calcularJuros()
    }
    main()