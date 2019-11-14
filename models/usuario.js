class Orcamento {
    static get tabela() {
        return 'orcamentos';
    }
    constructor(objOrcamento) {
        this.id_planta = '';
        this.id_orcador = '';
        this.custo_material = '';
        this.custo_operacional = '';
        Object.assign(this, objOrcamento);
    }

}

module.exports = Orcamento;