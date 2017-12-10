var Produto = require('../../models/carrinho');
var ObjectId = require('mongodb').ObjectID;
exports.save = function(cpf, titulo, quantidade, preco, callback){
new Carrinho ({
    'cpf': cpf,
    'titulo': titulo, 
    'quantidade': quantidade,
    'preco': preco
    }).save(function (err, produto){
        if (err){
            callback(err);  

        }
        else {
            callback(produto);
        }


    });




}


exports.list = function (cpf, callback){
    Produto.find({'cpf': cpf}, function (err, produtos){
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