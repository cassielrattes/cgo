const app = require('')

const connection  = mysql.createConnection({
    host : 'localhost',
    username : 'root',
    password : '1234',
    database : 'cgo'
});

class BancoUtils{

    app.get('/users', (req, res, next) => {
        connection.createConnection((err, connection) => {
            if(err) throw err;
            connection.query('SELECT * FROM products', (err, results) => {
                connection.release();
                if(err) return next(err);
                res.json(results);
            });
        });
}

module.exports = BancoUtils;