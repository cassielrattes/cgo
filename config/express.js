const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rotasDeOrcamentos = require('../routes/orcamentos')
const rotasDePlantas = require('../routes/plantas')
const rotasDeComponentes = require('../routes/componentes')
const rotasDeUsuarios = require('../routes/usuarios')



 const cookieParser = require('cookie-parser')
 

module.exports = function () {
    const app = express();

    
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser())
    
    const indexRoute = require('../routes/index')
    app.use('/', indexRoute)

    app.use('/orcamentos', rotasDeOrcamentos);
    app.use('/plantas', rotasDePlantas);
    app.use('/componentes', rotasDeComponentes);
    app.use('/usuarios', rotasDeUsuarios);


    return app;
}
