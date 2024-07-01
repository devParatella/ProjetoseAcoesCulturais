const express = require('express');
const {
  listarProjetos,
  obterProjetoPorId,
  criarProjeto,
  atualizarProjeto,
  deletarProjeto
} = require('../controller/projetoAcaoController');

const projetoAcaoRoute = express.Router();

projetoAcaoRoute.get('/', listarProjetos);
projetoAcaoRoute.get('/:id', obterProjetoPorId);
projetoAcaoRoute.post('/', criarProjeto);
projetoAcaoRoute.put('/:id', atualizarProjeto);
projetoAcaoRoute.delete('/:id', deletarProjeto);

module.exports = projetoAcaoRoute;
