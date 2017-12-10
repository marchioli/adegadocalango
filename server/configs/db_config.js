var mongoose = require('mongoose');

var urlString = 'mongodb://calangoadmin:calango123@tatooine.mongodb.umbler.com:47872/adegadocalango';

mongoose.connect(urlString, function(err, res){

    if (err){

        console.log('Não foi possivel conectar a: ' + urlString);
    
    }

    else {
        console.log("Conectado a: " + urlString);
    }


});

