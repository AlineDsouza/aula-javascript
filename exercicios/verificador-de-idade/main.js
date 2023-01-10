function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
     var res = document.querySelector('div#res')
    if(fAno.value.length === 0 || Number(fAno.value) > ano){
        window.alert('[ERRO]')
    } else  {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
    } 
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if(fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade<=10 ){
            //criança
            img.setAttribute('src','imagem/M1.jpg')
        } else if(idade<21){
            //jovem
            img.setAttribute('src', 'imagem/M2.jpg')
        }else if (idade<50){
            //adulto
            img.setAttribute('src', 'imagem/M3.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'imagem/M4.jpg')
            
        }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade<=10 ){
            //criança
            img.setAttribute('src','imagem/F1.jpg')
        } else if(idade<21){
            //jovem
            img.setAttribute('src', 'imagem/F2.jpg')
        }else if (idade<50){
            //adulto
            img.setAttribute('src', 'imagem/F3.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'imagem/F4.jpg')
            
        }
    }
    res.style.textAling = 'center'
    res.innerHTML = (`Detectamos ${genero} com ${idade} anos. <br>`) 
    res.appendChild(img)
}
