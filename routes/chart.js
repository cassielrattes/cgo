
const express = require('express');
const path = require('path');
const chart = express.Router();


module.exports = function () {

    chart.get('/chart', function (req, res) {
        res.sendFile(path.join(__dirname + '/chart.html'));
    });

    return chart;
}
