var btn = document.getElementById('botao')
btn.addEventListener('click', validar)

function validar() {
    var numtxt1 = window.document.getElementById('txt1')
    var numtxt2 = window.document.getElementById('txt2')
    var n1 = Number(numtxt1.value)
    var n2 = Number(numtxt2.value)
    erromsg = 'O número 2 deve ser maior do que o número 1.'
    msgSucesso = 'Formulário validado com Sucesso!'
    const containerMensagemErro = document.getElementById('erro')
    const containerMensagemSucesso = document.querySelector('#sucesso')
    if (n1 >= n2) {
        containerMensagemErro.innerHTML = erromsg
        containerMensagemErro.style.display = 'block'
        containerMensagemSucesso.style.display = 'none'

    } else {
        containerMensagemSucesso.innerHTML = msgSucesso
        containerMensagemSucesso.style.display = 'block'
        containerMensagemErro.style.display = 'none'
        numtxt1.value = ''
        numtxt2.value = ''
    }
}
