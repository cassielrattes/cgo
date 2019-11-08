# GRUPO - CGO 

* Nomes: {
    * "Bruno Rocha Roque";
    * "Cassiel Rattes Cortez";
    * "Felipe Augusto Gomes de Oliveira";
    * "Guilherme Perez";
}



// D O C U M E N T A Ç Ã O \\

* Usuários: Usuário_Edificações( Arquiteto, Engenheiro, etc...);
* Banco de Dados: {
    * Orçamento:   id, planta_id, custo_material e custo_operacao;
    * Componentes: id, orça_id, material, custo_material, custo_operacao, descricao e tipo;
    * Planta:      id, cliente, responsavel, arquivo, metragem e observacoes;
}

* Funcionalidades: {
    * Calculos precisos;
    * Informações da planta;
    * Cotação de Previsto X Real;
    * Visualização de graficos;
}

// BIZUS  

Para pegar o sql e guardá-lo em um arquivo, use o mysqldump. Para mais informações:
https://www.devmedia.com.br/backup-no-mysql-com-mysqldump-parte-1/7483