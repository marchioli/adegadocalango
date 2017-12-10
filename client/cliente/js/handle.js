var entrar = document.getElementById("entrar");
var getProfile = function () {
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

            xhttp.open("GET", "/userInfo");
            xhttp.setRequestHeader("content-type", "application/json");
            xhttp.send();
        } else {
            reject("AJAX Calls not supported on this browser");
        }
    });
};
var takeparam = function() {
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });
    if (data.status==1) {
        console.log(data);
        getProfile().then(function (data) {
            entrar.innerHTML =  "Bem vindo " + data[0].nome;
        }, function (err) {
            console.log(err);
        });
    

    }
};

takeparam();

var getProfile = function () {
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

            xhttp.open("GET", "/userInfo");
            xhttp.setRequestHeader("content-type", "application/json");
            xhttp.send();
        } else {
            reject("AJAX Calls not supported on this browser");
        }
    });
};




var getItems = function () {
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

            xhttp.open("GET", "/pegarProdutos");
            xhttp.setRequestHeader("content-type", "application/json");
            xhttp.send();
        } else {
            reject("AJAX Calls not supported on this browser");
        }
    });
};

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var titulo1 = document.getElementById("titulo1");
var titulo2 = document.getElementById("titulo2");
var titulo3 = document.getElementById("titulo3");
var preco1 = document.getElementById("preco1");
var preco2 = document.getElementById("preco2");
var preco3 = document.getElementById("preco3");

var item = document.getElementById("Item");
var item1 = document.getElementById("Item1");
var item2 = document.getElementById("Item2");

var indice = 0;
var data1;






getItems().then(function (data) {

    data1  = data;

   
    img1.innerHTML = "<img src='"+ data[0].imagem + "'>";
    titulo1.innerText = data[0].titulo;
    preco1.innerText = data[0].preco ;
 
    img2.innerHTML = "<img src='"+ data[1].imagem + "'>";
    titulo2.innerText = data[1].titulo;
    preco2.innerText = data[1].preco ;
     
    img3.innerHTML = "<img src='"+ data[2].imagem + "'>";
    titulo2.innerText = data[2].titulo;
    preco2.innerText = data[2].preco ;
    
    indice = 3;




}, function (err) {
    console.log(err);
});


var proximoItem = function (){

    if (data1[indice]) {
    
    img1.innerHTML = "<img src='"+ data1[indice].imagem + "'>";
    titulo1.innerText = data1[indice].titulo;
    preco1.innerText = data1[indice].preco ; }
    else {
     item.innerText = "";
    }

    if (data1[indice + 1]) {
        
    img2.innerHTML = "<img src='"+ data1[indice + 1].imagem + "'>";
    titulo2.innerText = data1[indice + 1].titulo;
    preco2.innerText = data1[indice + 1].preco ; }
    else {
        item1.innerText = "";
       }
     
       if (data1[indice + 2]) {
    img3.innerHTML = "<img src='"+ data1[indice + 2].imagem + "'>";
    titulo2.innerText = data1[indice + 2].titulo;
    preco2.innerText = data1[indice + 2].preco ;}
    else {
        item2.innerText = "";
       }
    indice = indice + 3;
   
    
    };