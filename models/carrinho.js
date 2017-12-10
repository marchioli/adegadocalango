var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarrinhoSchema = new Schema ({
    id: String, 
    cpf: String,
    titulo: String, 
    quantidade: Number,
    preco: Number
});


module.exports = mongoose.model('Carrinho', CarrinhoSchema);
