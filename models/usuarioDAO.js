const con = require('../helpers/connection');

class UsuarioDAO {
    buscarPorUsuarioESenha(usuario, cb) {
        const sql = 'SELECT * FROM usuarios WHERE usuario=? and senha =?';
        con.query(sql, [usuario.usuario, usuario.senha], (err,res) => {
            if(err) throw err;
            else cb(res);
        });
    }
}

module.exports = UsuarioDAO;