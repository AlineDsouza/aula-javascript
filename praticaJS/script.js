function carregar() {
    var msg = window.document.getElementById('msg')
    var _imagem = window.document.querySelector('imagem')
    var d = new Date()
    var hora = d.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
 
if (hora >=0 && hora<12){
    //img
    document.body.style.background = '#e2cd9f'
} else if(hora >=12 && hora <=18){
    //img
    document.body.style.background = '#985050'
} else {
    //igm
    document.body.style.background = '#000000'
}

}