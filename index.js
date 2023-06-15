var formulario = document.getElementById("meuFormulario")


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    var nomeRegex = /^[a-zA-Z\s]+$/

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    var inputNome = document.getElementById("name")
    var valorNome = inputNome.value.trim()

    const spanForm = document.querySelector(".span-form")

    var inputEmail = document.getElementById("email")
    var valorEmail = inputEmail.value.trim()

    if (nomeRegex.test(valorNome) == false) {        
        spanForm.innerHTML = 'Nome Inválido'
        return
    } else if (emailRegex.test(valorEmail) == false) {
        spanForm.innerHTML = 'Email Inválido'
        return
    } else {
        spanForm.innerHTML = ''
        formulario.submit();
    }
})