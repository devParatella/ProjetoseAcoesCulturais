// controllers/notificacaoController.js
const Notificacao = require('../models/notificacaoModel');

// Listar todas as notificações
const listarNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.status(200).json(notificacoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar notificações', error });
  }
};

// Obter uma notificação pelo ID
const obterNotificacaoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacao = await Notificacao.findByPk(id);
    if (!notificacao) {
      return res.status(404).json({ message: 'Notificação não encontrada' });
    }
    res.status(200).json(notificacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter notificação', error });
  }
};

// Criar uma nova notificação
const criarNotificacao = async (req, res) => {
  try {
    const novaNotificacao = await Notificacao.create(req.body);
    res.status(201).json(novaNotificacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar notificação', error });
  }
};

// Atualizar uma notificação
const atualizarNotificacao = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacaoAtualizada = await Notificacao.update(req.body, { where: { id_notificacao: id } });
    if (notificacaoAtualizada[0] === 0) {
      return res.status(404).json({ message: 'Notificação não encontrada' });
    }
    res.status(200).json({ message: 'Notificação atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar notificação', error });
  }
};

// Deletar uma notificação
const deletarNotificacao = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacaoDeletada = await Notificacao.destroy({ where: { id_notificacao: id } });
    if (!notificacaoDeletada) {
      return res.status(404).json({ message: 'Notificação não encontrada' });
    }
    res.status(200).json({ message: 'Notificação deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar notificação', error });
  }
};

module.exports = {
  listarNotificacoes,
  obterNotificacaoPorId,
  criarNotificacao,
  atualizarNotificacao,
  deletarNotificacao,
};
