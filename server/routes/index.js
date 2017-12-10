(function () {
    "use strict";


    module.exports = function (app, passport, db) {

        require("./partials/gerenciarUsuario")(app, passport, db);
        require("./partials/gerenciarProduto")(app, passport, db);
       
        var ensureAuthenticated = function (req, res, next) {
            console.log(req.isAuthenticated());
            console.log("ensure");

            if(req.isAuthenticated()){
                return res.redirect("/logado?status=1")
            }

            else{
            return res.redirect("/logado?status=0");
        }
        };
        app.get("/", ensureAuthenticated, function (req, res) {
            return res.status(200).render("./cliente/primeira.html");
        });
        app.get("/admin", function (req, res) {
            return res.status(200).render("./admin/admin.html");
        });

    };

}());