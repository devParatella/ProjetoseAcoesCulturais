const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const ProjetoAcao = sequelize.define('Projeto', {
  id_projetoacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  //termo de aceite
  termo_aceite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  nome_projetoacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  descricao_proposta: {// unico
    type: DataTypes.TEXT,
    allowNull: false,
  },



  fotos_imagens: {//5 arquivos
    type: DataTypes.STRING,
    allowNull: false,
    get(){
      const path = this.getDataValue('fotos_imagens');

    }
  },




  duvidas: {//
    type: DataTypes.TEXT,
    allowNull: false,
  },

  linguagem_artistica: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  // pendente para o adm e em análise para o proponente
  // aprovado ou recusado// reenviar para proponente
  status: {
    type: DataTypes.ENUM('pendente', 'aprovado', 'rejeitado'),
    defaultValue: 'pendente',
  },
}, {
  timestamps: true,
});

module.exports = ProjetoAcao;
