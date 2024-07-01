// models/index.js
const { sequelize } = require("../config/database");
const Usuario = require("./usuarioModel");
const ProjetoAcao = require("./projetoAcaoModel");
const Anexo = require("./anexoModel");
const EspacoCultural = require("./espacoCulturalModel");
const Notificacao = require("./notificacaoModel");

// Relacionamentos
Usuario.hasMany(ProjetoAcao, { foreignKey: "id_usuario" });
ProjetoAcao.belongsTo(Usuario, { foreignKey: "id_usuario" });

ProjetoAcao.hasMany(Anexo, { foreignKey: "id_projetoacao" });
Anexo.belongsTo(ProjetoAcao, { foreignKey: "id_projetoacao" });

ProjetoAcao.belongsTo(EspacoCultural, { foreignKey: "id_espaco_cultural" });
EspacoCultural.hasMany(ProjetoAcao, { foreignKey: "id_espaco_cultural" });

ProjetoAcao.hasMany(Notificacao, { foreignKey: "id_projetoacao" });
Notificacao.belongsTo(ProjetoAcao, { foreignKey: "id_projetoacao" });

module.exports = {
  sequelize,
  Usuario,
  ProjetoAcao,
  Anexo,
  EspacoCultural,
  Notificacao,
};
