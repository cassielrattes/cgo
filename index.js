const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');


    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', express.static(path.join(__dirname, 'public/views')));

    app.listen(3000, '0.0.0.0', () => {
        console.log('running')
    })