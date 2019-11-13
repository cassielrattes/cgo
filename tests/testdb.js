const OrcDAO = require('../models/orcamentoDAO');

const orcDAO = new OrcDAO();

orcDAO.buscaPorUsuarioESenha({id: 'test'}, (err,res) => {
    console.log(res);
})