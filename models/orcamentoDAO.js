
// const con = require('../helpers/connection')
class OrcamentoDAO {

    buscaPorUsuarioESenha(orcamento, cb) {
        const sql = "select * from orcamentos where id=?";
        con.query(sql, [orcamento.id, orcamento], (err, res) => {
            if (err) throw err;
            else cb(res);
        });
    }
}
module.exports = OrcamentoDAO;
