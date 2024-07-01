const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Anexo = sequelize.define('Anexo', {
  id_anexo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_anexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arquivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_projetoacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Anexo;
