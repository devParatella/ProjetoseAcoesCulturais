const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const bcrypt = require("bcrypt");

const UsuarioModel = sequelize.define(
  "Usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_completo: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
        len: [5, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue("email", value.toLowerCase());
      },
      validate: {
        isEmail: true,
      },
    },
    senha: {
      //complexidade de senha 6 caracteres
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
        isComplex(value) {},
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    raca_etnia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comprovante_residencia: {
      //aplicar o multer
      type: DataTypes.STRING,
      allowNull: true,
    },

    documento_rne: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    documento_identificacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (usuario) => {
        if (usuario.senha) {
          const salt = await bcrypt.genSalt(10);
          usuario.senha = await bcrypt.hash(usuario.senha, salt);
        }
      },
      beforeUpdate: async (usuario) => {
        if (usuario.senha) {
          const salt = await bcrypt.genSalt(10);
          usuario.senha = await bcrypt.hash(usuario.senha, salt);
        }
      },
    },
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = UsuarioModel;
