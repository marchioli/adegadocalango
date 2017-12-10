var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProdutoSchema = new Schema ({
    titulo: String, 
    descricao: String, 
    preco: Number,
    quantidade: Number,
    imagem:  { type: Buffer }

});


module.exports = mongoose.model('Produto', ProdutoSchema);
