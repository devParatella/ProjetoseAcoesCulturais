const Usuario = require("../models/usuarioModel");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao listar usuários", error });
  }
};

const obterUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao obter usuário", error });
  }
};

const criarUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const usuarioExistente = await Usuario.findOne({
      where: {
        email: {
          [Op.like]: req.body.email.toLowerCase(),
        },
      },
    });

    if (usuarioExistente) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    if (req.body.senha) {
      const salt = await bcrypt.genSalt(10);
      req.body.senha = await bcrypt.hash(req.body.senha, salt);
    }

    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error(error);
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Email já cadastrado" });
    }
    res.status(500).json({ message: "Erro ao criar usuário", error });
  }
};


const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioAtualizado = await Usuario.update(req.body, {
      where: { id_usuario: id },
    });
    if (usuarioAtualizado[0] === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
};

const deletarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioDeletado = await Usuario.destroy({
      where: { id_usuario: id },
    });
    if (!usuarioDeletado) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};

module.exports = {
  listarUsuarios,
  obterUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
};
