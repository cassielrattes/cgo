
const express = require('express');
const path = require('path');
const orcamento = express.Router();


module.exports = function () {

    orcamento.get('/orcamento', function (req, res) {
        res.sendFile(path.join(__dirname + '/orcamento.html'));
    });

    return orcamento;
}
