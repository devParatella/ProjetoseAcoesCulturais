const Notificacao = require('../models/notificacaoModel');

// Listar todas as notificações
exports.getNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.status(200).json(notificacoes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Criar uma nova notificação
exports.createNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.create(req.body);
    res.status(201).json(notificacao);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
