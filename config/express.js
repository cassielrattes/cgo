const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const path = require('path');


module.exports = function () {
    const app = express();

    app.use(cors());
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // ROUTES //
   // app.get('/oi', (req, res) => {
      //  if(req.cookies.token){
        //    res.redirect('/views/cadastro')
        //} else {
        //    res.send('nop')
        // }
    //})

    app.get('/views/cadastro', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/cadastro.html'));
    });

    app.get('/views/chart', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/chart.html'));
    });

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));

    });


    app.get('/views/sobre', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/sobre.html'));
    });

    app.get('/views/login', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/login.html'));
    });

    app.get('/views/orcamento', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/orcamento.html'));
    });

    app.get('/views/suporte', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/suporte.html'));
    });

    app.get('/private/adminpanel', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/adminPanel.html'));
    });



    return app;
}
