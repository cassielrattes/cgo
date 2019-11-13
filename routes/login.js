
const express = require('express');
const path = require('path');
const login = express.Router();


module.exports = function () {

    login.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname + '/login.html'));
    });

    return login;
}
