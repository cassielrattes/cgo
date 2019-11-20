const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotasDeOrcamentos = require('../routes/orcamentos')
const rotasDePlantas = require('../routes/plantas')
const rotasDeComponentes = require('../routes/componentes')
const rotasDeUsuarios = require('../routes/usuarios')

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


    app.use('/orcamentos', rotasDeOrcamentos);
    app.use('/plantas', rotasDePlantas);
    app.use('/componentes', rotasDeComponentes);
    app.use('/usuarios', rotasDeUsuarios);
   

    return app;
}
