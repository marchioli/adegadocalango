
var inputNome = document.getElementById("textNome");
var inputEmail = document.getElementById("inputEmail");
var inputSenha = document.getElementById("inputPassword");
var button = document.getElementById("botao");

button.addEventListener("click", function () {
    var tipo = "1";

    console.log(inputEmail.value, inputNome.value, inputSenha.value);
    criarCadastro(inputEmail.value, inputNome.value, inputSenha.value);
    
   });