class Planta {
    static get tabela() {
        return 'plantas';
    }
    constructor(objPlanta) {
        this.cliente = '';
        this.responsavel = '';
        this.metragem = '';
        this.observacao = '';
        Object.assign(this, objPlanta);
    }

}

module.exports = Planta;