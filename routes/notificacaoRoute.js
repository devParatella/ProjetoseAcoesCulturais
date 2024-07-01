const express = require('express');
const { getNotificacoes, createNotificacao } = require('../controller/notificacaoController');

const notificacaoRoute = express.Router();

notificacaoRoute.get('/', getNotificacoes);
notificacaoRoute.post('/', createNotificacao);

module.exports = notificacaoRoute;
