class Orcamento {
    constructor(orcamento){
        this.id = "";
        this.id_planta = "";
        this.custo_material = "";
        this.custo_operacional = "";
        Object.assign(this,orcamento);

    }
}
module.exports = Orcamento;