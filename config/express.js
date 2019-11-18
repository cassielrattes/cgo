const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotasDeOrcamento = require('../routes/orcamentos')
const rotasDePlanta = require('../routes/plantas')
// const path = require('path');
// const cookieParser = require('cookie-parser')
// const mysql = require('mysql');
// const connection = require('../helpers/connection')
// const BancoUtils = require('../helpers/bancoUtils')

module.exports = function () {
    const app = express();

    // app.use(cookieParser())

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    const indexRoute = require('../routes/index')
    app.use('/', indexRoute)


    app.use('/orcamentos', rotasDeOrcamento);
    app.use('/plantas', rotasDePlanta);


    return app;
}
