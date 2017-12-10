(function () {
    "use strict";


    module.exports = function (app,passport, db) {

    var CarrinhoController = require('../../controllers/CarrinhoController');
       
    app.get("/pegarCarrinho", function (req, res) {
        

        CarrinhoController.list(req.user.id, function(data) {
                     return res.json(data);
  }); 
});      

        
        
    }          
        
}());