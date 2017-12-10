var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    _id: String,
    nome: String, 
    senha: String, 
    email: String 
});


module.exports = mongoose.model('User', UserSchema);
