const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Planta = require('../models/planta');
const routers = express.Router();

routers.get('/', (req, res) => {
    BancoUtils.select(Planta.tabela, (plantas) => {
        res.json(plantas);
    })
});

routers.post('/', (req, res) => {
    const planta = new Planta(req.body);
    BancoUtils.insert(planta, Planta.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const plantaNew = new Planta(req.body);
    BancoUtils.put(plantaNew, Planta.tabela, { key: 'id', value: plantaNew.id }, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req, res) => {
    BancoUtils.delete(Planta.tabela, { key: 'id', value: req.params.id }, (r) => {
        res.json(r);
    });
})

module.exports = routers;
