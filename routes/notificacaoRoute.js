const express = require('express');
const {
  listarNotificacoes,
  obterNotificacaoPorId,
  criarNotificacao,
  atualizarNotificacao,
  deletarNotificacao
} = require('../controllers/notificacaoController');

const notificacaoRoute = express.Router();

notificacaoRoute.get('/', listarNotificacoes);
notificacaoRoute.get('/:id', obterNotificacaoPorId);
notificacaoRoute.post('/', criarNotificacao);
notificacaoRoute.put('/:id', atualizarNotificacao);
notificacaoRoute.delete('/:id', deletarNotificacao);

module.exports = notificacaoRoute;
