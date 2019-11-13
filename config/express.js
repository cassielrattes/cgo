const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// const cadastro = require('../routes/cadastro');
// const chart = require('../routes/chart');
// const index = require('../routes/index');
// const login = require('../routes/login');
// const orcamento = require('../routes/orcamento');
// const suporte = require('../routes/suporte');

module.exports = function () {

    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/home', (req, res) => {
        res.sendFile(__dirname + '/../public/login.html');
    })

    // app.use('/cadastro', cadastro)
    // app.use('/chart', chart)
    // app.use('/', index)
    // app.use('/login', login)
    // app.use('/orcamento', orcamento)
    // app.use('/suporte', suporte)

    return app;
}
