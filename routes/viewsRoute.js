const express = require('express')
const router = express.Router()
const path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

router.get('/cadastro', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/cadastro.html'));
});

router.get('/chart', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/chart.html'));
});

router.get('/sobre', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/sobre.html'));
});

router.get('/login', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/login.html'));
});

router.get('/orcamento', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/orcamento.html'));
});

router.get('/suporte', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/suporte.html'));
});

router.get('/private/adminpanel', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/adminPanel.html'));

});

module.exports = router