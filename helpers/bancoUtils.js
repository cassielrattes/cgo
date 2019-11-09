const con = require('./connection');

class BancoUtils {
    static insert(obj, tb, cb){
        con.query(`INSERT INTO ${tb} SET ?`, obj, (err,res) => {
            if(err)  throw err;
            cb(res);
        });
    }

    static select(tb, cb){
        con.query(`SELECT * FROM ${tb}`, (err,res) => {
            if(err) throw err;
            cb(res);
        });
    }

    static delete(tb, pk, cb){
        con.query(`DELETE FROM ${tb} where ${pk.key}=?`, pk.value, (err,res) => {
            if(err) throw err;
            cb(res);
        })
    }

    static put(obj, tb, pk, cb){
        con.query(`UPDATE ${tb} SET ? where ${pk.key}=?`, [obj, pk.value], (err,res) => {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = BancoUtils;