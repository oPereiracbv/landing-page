function validarFormulario() {
    alert("Dados enviados! Em breve entraremos em contato!");
}
document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');

    Formulario.addEventListener('submit', function(){
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        window.location.href = 'index.html';
    })
})