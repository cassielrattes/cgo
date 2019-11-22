const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const rotasDeOrcamentos = require('../routes/orcamentos')
const rotasDePlantas = require('../routes/plantas')
const rotasDeComponentes = require('../routes/componentes')
const rotasDeUsuarios = require('../routes/usuarios')



const cookieParser = require('cookie-parser')


module.exports = function () {
    const app = express();


    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(cookieParser())

    const indexRoute = require('../routes/index')
    app.use('/', indexRoute)

    app.use('/orcamentos', rotasDeOrcamentos);
    app.use('/plantas', rotasDePlantas);
    app.use('/componentes', rotasDeComponentes);
    app.use('/usuarios', rotasDeUsuarios);


    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     port: 587,
    //     auth: {
    //         user: 'cgocontato2965@gmail.com',
    //         pass: 'EcGo2965'
    //     }
    // });

    // var mailOptions = {
    //     from: 'cgocontato2965@gmail.com',
    //     to: 'cassielrattes@gmail.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });




    return app;
}