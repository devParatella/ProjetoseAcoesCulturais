const express = require('express');
const UsuarioModel = require('../models/usuarioModel');
const usuarioRoute = express.Router();

// Rota para criar um novo usuário
usuarioRoute.post('/', async (req, res) => {
  try {
    const usuario = await UsuarioModel.create(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar todos os usuários
usuarioRoute.get('/', async (req, res) => {
  try {
    const usuarios = await UsuarioModel.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = usuarioRoute;
