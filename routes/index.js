
const express = require('express');
const path = require('path');
const index = express.Router();


module.exports = function () {

    index.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    return index;
}
