

var getTopic = function () {
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

            xhttp.open("GET", "/pegarfoto");
            xhttp.setRequestHeader("content-type", "application/json");
            xhttp.send();
        } else {
            reject("AJAX Calls not supported on this browser");
        }
    });
};

var img = document.getElementById("imagem");
getTopic().then(function (data) {
    console.log(data[0].imagem.data);
    img.innerHTML = "<img src='"+ data[0].imagem + "'>";
    
}, function (err) {
    console.log(err);
});