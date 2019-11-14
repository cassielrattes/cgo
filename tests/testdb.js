const OrcDAO = require('../models/orcamentoDAO');

const orcDAO = new OrcDAO();

orcDAO.buscarPorId({id: 4}, (res) => {
    console.log(res);
})