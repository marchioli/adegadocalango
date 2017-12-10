var User = require('../../models/user');

exports.save = function(id, nome, senha, email, callback){
new User ({

    '_id': id,
    'nome': nome,
    'senha': senha,
    'email': email
    }).save(function (err, user){
        if (err){
            callback({error:'Não foi possivel salvar'});

        }
        else {
            callback(user);
        }


    });




}


exports.list = function (callback){
    User.find({}, function (err, users){
        if(err) {
            callback({error:'Não foi possivel listar'});
        }
        else {
            callback(users);
        }

    });

}

exports.listLogin = function (username, password, callback){
    User.find({ '_id': username, 'senha': password}, function (err, user){
        if(err) {
            callback({error:'Não foi possivel encontrar'});
        }
        else {
            callback(user);
        }

    });

}