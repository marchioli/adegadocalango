/*eslint-env node*/

(function () {
    "use strict";

    var cfenv = require('cfenv');
    var appEnv = cfenv.getAppEnv();
    require("dotenv").config({
        "silent": true
    });
    var bodyParser = require("body-parser");
    var cookieSession = require("cookie-session");
    var cookieParser = require("cookie-parser");
    var passport = require('passport');

    process.isLocal = /localhost/.test(appEnv.bind) || appEnv.isLocal;

    var express = require('express');
    var engines = require("consolidate");
    var app = express();
    app.use(bodyParser.json({
        "limit": "50mb"
    }));
    
    app.use(bodyParser.urlencoded({
        "extended": true,
        "limit": "10mb"
    }));




    
  


    app.use(cookieParser());
    app.use(cookieSession({
        "secret": "cupit123",
        "maxAge": 86400000,
        "saveUninitialized": false,
        "resave": false,
        "name": "jsessionid",
        "key": "jsessionid",
        "cookie": {
            "secure": true,
            "httpOnly": true
        }
    }));



    app.use(passport.initialize());
    app.use(passport.session());


    var db = require('./server/configs/db_config');
    var User = require('./models/user');
    var UserController = require('./server/controllers/UserController');

    app.get('/users', function(req, res){
        UserController.list(function (data){

            res.json(data);     

        });

    });




   // const MongoClient = require('mongodb').MongoClient
    //var db;
    
  //  MongoClient.connect('mongodb://calangoadmin:calango123@tatooine.mongodb.umbler.com:47872/adegadocalango', (err, database) => {
   //   if (err) return console.log(err)
   //   db = database
   //   app.listen(3000, () => {
   //     console.log('listening on 3000')
   //   });
  //  });
   

    //app.get('/mostrar', (req, res) => {
     //   db.collection('users').find({"senha":"123"}).toArray(function(err, results) {
     //       console.log(results)
     //     });
    //  });
    

    app.engine("html", engines.ejs);
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/client");
    app.use(express.static(__dirname + '/client'));
    require("./server/routes/index")(app,passport, db);

    app.listen(appEnv.port, '0.0.0.0', function() {
        console.log("server starting on " + appEnv.url);
    });

}());
