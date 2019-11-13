
const express = require('express');
const path = require('path');
const suporte = express.Router();


module.exports = function () {

    suporte.get('/suporte', function (req, res) {
        res.sendFile(path.join(__dirname + '/suporte.html'));
    });

    return suporte;
}
