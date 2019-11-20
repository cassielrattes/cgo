const Utils = require('../helpers/utils');

class Usuario {
    static get tabela() {
        return 'usuarios';
    }
    constructor(ObjUsuario){       
        this.usuario = '';
        this.senha = '';
        this.nome = '';
        this.tipo = '';
        Object.assign(this, ObjUsuario);
    }

    setarSenha(senha){
        this.senha = Utils.criptografa(senha);
    }
}

module.exports = Usuario;