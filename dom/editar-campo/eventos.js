const txtemail = document.getElementById('txtemail')

function editar(){
    txtemail.disabled = false
    txtemail.focus()
}


function disabledEmail(){
    txtemail.disabled = true
}


// exemplo 02

const txtnome = document.querySelector('#txtnome')
const email = document.getElementById('email')
