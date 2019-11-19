class Componente {
    static get tabela() {
        return 'componentes';
    }
    constructor(objComponente) {
        this.custo_material = '';
        this.custo_operacional = '';
        this.descricao = '';
        this.tipo = '';
        this.id_orcamento = '';
        Object.assign(this, objComponente);
    }

}

module.exports = Componente;