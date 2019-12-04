const express = require('express')
const router = express.Router()
const path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

router.get('/viewpanel', function (req, res) {
    if (req.cookies.token) {
        res.sendfile(path.resolve(__dirname + '/../public/viewPanel.html'));
    } else {
        res.redirect('/');
    }
});

router.get('/admorcamento', function (req, res) {
    if (req.cookies.token) {
        res.sendfile(path.resolve(__dirname + '/../public/adminPanelOrcamento.html'));
    } else {
        res.redirect('/');
    }
});

router.get('/admplanta', function (req, res) {
    if (req.cookies.token) {
        res.sendfile(path.resolve(__dirname + '/../public/adminPanelPlanta.html'));
    } else {
        res.redirect('/');
    }
});

router.get('/admcomponente', function (req, res) {
    if (req.cookies.token) {
        res.sendfile(path.resolve(__dirname + '/../public/adminPanelComponentes.html'));
    } else {
        res.redirect('/');
    }
});

module.exports = router