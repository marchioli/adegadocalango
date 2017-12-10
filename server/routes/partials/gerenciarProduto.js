(function () {
    "use strict";


    module.exports = function (app,passport, db) {

    var ProdutoController = require('../../controllers/ProdutoController');
        var formidable = require('formidable');
        var fs = require('fs');
    
        app.post("/salvarProduto", function (req, res) {
            console.log(req.body);
                
                var form = new formidable.IncomingForm();
                form.parse(req, function(err, fields, files){
                    var img = files.image;
                    fs.readFile(img.path, function(err, data){

                        console.log(data);

                        ProdutoController.save(fields.titulo, fields.descricao, fields.preco, fields.quantidade, data, function (data2) {
                            
                        res.json(data2);

                    });      


                });

             });
         });





         app.post("/produtos", function (req, res) {

           return res.redirect("/procurar?produto="+req.body.produto);

    });      


    app.get("/procurar", function (req, res) {
        

        return res.status(200).render("./cliente/lista.html");

});      


         

         app.get("/pegarProdutos", function (req, res) {
            

            ProdutoController.list(function(data) {
                var response = [] ;  
                    data.forEach(function(data) {
                         
                    response.push(
                        {
                            titulo : data.titulo,
                            descricao : data.descricao,
                            preco : data.preco,
                            quantidade : data.quantidade,
                            imagem : 'data:image/jpeg;base64,' + data.imagem.toString('base64')
                        }
                    )
                        
                    });
                         return res.json(response);
      }); 
    });      
    
    app.get("/procurarProdutos", function (req, res) {
    
        

        ProdutoController.listProduto(req.query.produto, function(data) {
            var response = [] ;  
                data.forEach(function(data) {
                     
                response.push(
                    {
                        titulo : data.titulo,
                        descricao : data.descricao,
                        preco : data.preco,
                        quantidade : data.quantidade,
                        imagem : 'data:image/jpeg;base64,' + data.imagem.toString('base64')
                    }
                )
                    
                });
                     return res.json(response);
});      });





         app.get("/pegarProduto", function (req, res) {
            
            var id = req.query.id;

            ProdutoController.listProduto(id, function(data) {
                var response = [] ;  
                    data.forEach(function(data) {
                         
                    response.push(
                        {
                            titulo : data.titulo,
                            descricao : data.descricao,
                            preco : data.preco,
                            quantidade : data.quantidade,
                            imagem : 'data:image/jpeg;base64,' + data.imagem.toString('base64')
                        }
                    )
                        
                    });
                         return res.json(response);
      });
             
            


        });      



        
        
    }          
        
}());