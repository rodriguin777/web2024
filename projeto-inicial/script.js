var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
 
function alertar(event){
   // alert("Você clicou no botão!!!!" + event);
 
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
    .then(function (respostas){
    return respostas.json()
    })
    .then(function (dados){
        logradouro.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;
    })

}
 
    function saidaDeDados(){
    saida.innerText = "Nome: " + nome.value +
            "\n Email: " + email.value +
            "\n Telefone: " + telefone.value +
            "\n CEP: " + cep.value +
            "\n Logradouro: " + logradouro.value +
            "\n Número: " + numero.value +
            "\n Complemento: " + complemento.value +
            "\n Bairro: " + bairro.value +
            "\n Cidade: " + cidade.value +
            "\n Estado: " + estado.value;
 

}