



var but_cad = document.getElementById("but_cad");
var but_log = document.getElementById("but_log");  
var cad_area = document.getElementById("cad_area");  
var log_area = document.getElementById("log_area"); 
var but_area = document.getElementById("but_area"); 
but_cad.addEventListener("click", function () {
    cad_area.style.display='flex';
    but_area.style.display='none';
});
but_log.addEventListener("click", function () {
    log_area.style.display='flex';
    but_area.style.display='none';
});

document.getElementById("but_voltar1").addEventListener("click", function () {
    cad_area.style.display='none';
    log_area.style.display='none';
    but_area.style.display='block';
});
document.getElementById("but_voltar2").addEventListener("click", function () {
    cad_area.style.display='none';
    log_area.style.display='none';
    but_area.style.display='block';
});

var inputNome = document.getElementById("textNome");
var inputEmail = document.getElementById("inputEmail");
var inputSenha = document.getElementById("inputPassword");
var button = document.getElementById("botao");



button.addEventListener("click", function () {
    var tipo = "1";

    console.log(inputEmail.value, inputNome.value, inputSenha.value);
    criarCadastro(inputEmail.value, inputNome.value, inputSenha.value);
    
   });



    /* var but_cad = document.querySelector("#botao_cadastrar"); */


 




var cadastro = function (dados) {
    return new Promise(function (resolve, reject) {
        if (window.XMLHttpRequest) {
            var xhttp = new window.XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4) {
                    if (xhttp.status === 200) {
                        if (xhttp.responseText) {
                            try {
                                resolve(JSON.parse(xhttp.responseText));
                            } catch (e) {
                                resolve(xhttp.responseText);
                            }
                        } else {
                            reject("Empty response");
                        }
                    } else {
                        reject(xhttp.responseText);
                    }
                }
            };

            xhttp.open("POST", "/cadastrar");
            xhttp.setRequestHeader("content-type", "application/json");
            
            xhttp.send(JSON.stringify(dados));
            console.log(JSON.stringify(dados));
        } else {
            reject("AJAX Calls not supported on this browser");
        }
    });
};



var criarCadastro = function ( email, nome, senha) {
    cadastro({
        "_id": email,
        "nome": nome,
        "senha": senha,    
        "perfil": "cliente",
        "tipo": "cadastro" 
    }).then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
};


/*
button.addEventListener("click", function () {
    
    var Div1 = document.createElement("div");
    div1.classList.add("card");

    var topicTitle = document.createElement("h4");
    var topicDescription = document.createElement("div");
    topicTitle.innerText = data.docs[i]._id;
    topicDescription.innerText = data.docs[i].NAME;

    topicDiv.appendChild(topicTitle);
    topicDiv.appendChild(topicDescription);
    topicsContainer.appendChild(topicDiv);
*/






