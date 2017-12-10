(function () {
    "use strict";


    module.exports = function (app,passport, db) {

    var UserController = require('../../controllers/UserController');
        
    
        app.post("/cadastrar", function (req, res) {
            console.log(req.body);
                user.insert(req.body, function (err, status) {
                 if (err) {
                     return res.status(500).send(err);
                 } else {
                     return res.status(200).send(status);
                 }
             });
         });


         var LocalStrategy = require('passport-local').Strategy;
   
        


          app.post('/login',
          passport.authenticate('local', {
            successRedirect: '/loginSuccess',
            failureRedirect: '/loginFailure'
          })
        );
        
        app.get('/loginFailure', function(req, res, next) {
          res.send('Failed to authenticate');
        });
        
        app.get('/loginSuccess', function(req, res, next) {
            res.status(200).redirect("/logado?status=1");
        });

        passport.serializeUser(function(user, done) {
            done(null, user);
          });
          
          passport.deserializeUser(function(user, done) {
            done(null, user);
          });

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


        app.get("/logout", function (req, res) {
            res.clearCookie("connect.sid");
            req.session = null;
            res.redirect("./cliente/logoff.html");
            });
    


        app.get("/logado", function (req, res) {
            return res.status(200).render("./cliente/primeira.html");
        });

        app.get("/userInfo", function (req, res) {
            return res.status(200).send(req.user || {
                "id": "pavao@br.ibm.com",
                "_json":{"firstName":"Paulo Roberto"}
            });
        });

        passport.use(new LocalStrategy(function(username, password, done) {
            process.nextTick(function() {
                    console.log(username,password);
                
                UserController.listLogin(username, password, function(data) {
                          
                                    if (data)
                                        return done(null, data);
                                      
                                       else
                                          return done(null, false);
               
                });

            });
          }));



          app.get("/pegarLogin", function (req, res) {

          UserController.listLogin(req.query.id, req.query.senha, function(data) {
            
            return res.json(data);

 
          });   });




        
            }
        
}());