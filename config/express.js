const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


module.exports = function () {
    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // ROUTES //

    app.get('/views/cadastro', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/cadastro.html'));
    });

    app.get('/views/chart', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../public/chart.html'));
    });

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));

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


    return app;
}
