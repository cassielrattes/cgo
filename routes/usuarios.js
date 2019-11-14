const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Orcamento = require('../models/usuario');
const routers = express.Router();

routers.post('/', (req, res) => {
    const orcamento = new Orcamento(req.body);
    BancoUtils.insert(orcamento, Orcamento.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const orcamentoNew = new Orcamento(req.body);
    BancoUtils.put(orcamentoNew, Orcamento.tabela, { key: 'id_planta', value: orcamentoNew.id_planta }, (r) => {
        res.json(r);
    });
})

routers.delete('/:id_planta', (req, res) => {
    BancoUtils.delete(Orcamento.tabela, { key: 'id_planta', value: req.params.id_planta }, (r) => {
        res.json(r);
    });
})

module.exports = routers;
