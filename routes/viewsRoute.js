const express = require('express')
const router = express.Router()
const path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});


router.get('/login', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/login.html'));
});

router.get('/viewpanel', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/viewPanel.html'));
});

router.get('/admorcamento', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/adminPanelOrcamento.html'));
});

router.get('/admplanta', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/adminPanelPlanta.html'));
});

router.get('/admcomponente', function (req, res) {
    res.sendfile(path.resolve(__dirname + '/../public/adminPanelComponentes.html'));
});

module.exports = router