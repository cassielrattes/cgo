const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Componente = require('../models/componente');
const routers = express.Router();

routers.get('/', (req, res) => {
    BancoUtils.select(Componente.tabela, (r) => {
        res.json(r);
    })
});

routers.post('/', (req, res) => {
    const componente = new Componente(req.body);
    BancoUtils.insert(componente, Componente.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const componenteNew = new Componente(req.body);
    BancoUtils.put(componenteNew, Componente.tabela, { key: 'id', value: componenteNew.id }, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req, res) => {
    BancoUtils.delete(Componente.tabela, { key: 'id', value: req.params.id }, (r) => {
        res.json(r);
    });
})

module.exports = routers;
