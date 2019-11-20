const crypto = require('crypto');

class Utils{
    static criptografa(senha){
        return crypto.createHash('md5').update(senha).digest("hex");
    }
}

module.exports = Utils;