var Produto = require('../../models/produto');
var ObjectId = require('mongodb').ObjectID;
exports.save = function(titulo, descricao, preco, quantidade, imagem, callback){
new Produto ({

    'titulo': titulo,
    'descricao': descricao,
    'preco': preco,
    'quantidade': quantidade,
    'imagem': imagem
    }).save(function (err, produto){
        if (err){
            callback(err);  

        }
        else {
            callback(produto);
        }


    });




}


exports.list = function (callback){
    Produto.find({}, function (err, produtos){
        if(err) {
            callback({error:'Não foi possivel listar'});
        }
        else {
            callback(produtos);
        }

    });

}

exports.listProduto = function (id, callback){
    
    Produto.find({ '_id': ObjectId(id)}, function (err, produto){
        if(err) {
            callback({error:'Não foi possivel encontrar'});
        }
        else {
            callback(produto);
        }

    }); };

    exports.procurarProduto = function (par, callback){
        par = '/' + par + '/';
        console.log(par);
        Produto.find({ titulo : par}, function (err, produto){
            if(err) {
                callback({error:'Não foi possivel encontrar'});
            }
            else {
                callback(produto);
            }
    
        }); };