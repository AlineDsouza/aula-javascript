   let txtemail = document.getElementById('txtemail')
   const msg = document.getElementById('newsletterFeedback')
   
   
   function cadastraremail(){
    let email = txtemail.value
    msg.innerHTML = `O e-mail ${email} foi cadastrado!`
}