
const express = require('express');
const path = require('path');
const cadastro = express.Router();


module.exports = function () {

    cadastro.get('/cadastro', function (req, res) {
        res.sendFile(path.join(__dirname + '/../../public/cadastro.html'));
    });

    return cadastro;
}
