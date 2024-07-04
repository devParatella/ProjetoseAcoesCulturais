const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const EspacoCultural = sequelize.define('EspacoCultural', {
  id_espaco_cultural: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_espaco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {//remover?
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = EspacoCultural;
