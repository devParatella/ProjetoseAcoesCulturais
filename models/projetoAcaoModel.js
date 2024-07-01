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
  nome_projetoacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pdf_descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cronograma: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pendente', 'aprovado', 'rejeitado'),
    defaultValue: 'pendente',
  },
}, {
  timestamps: true,
});

module.exports = ProjetoAcao;
