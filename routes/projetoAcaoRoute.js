const express = require('express');
const ProjetoAcaoModel = require('../models/projetoAcaoModel');
const { getProjetosAcoes, createProjetoAcao } = require('../controller/projetoAcaoController');
const projetoAcaoRoute = express.Router();



projetoAcaoRoute.get('/', getProjetosAcoes);
projetoAcaoRoute.post('/', createProjetoAcao);

module.exports = projetoAcaoRoute;
