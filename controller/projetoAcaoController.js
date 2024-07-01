// controllers/projetoAcaoController.js
const ProjetoAcao = require('../models/projetoAcaoModel');

// Listar todos os projetos
const listarProjetos = async (req, res) => {
  try {
    const projetos = await ProjetoAcao.findAll();
    res.status(200).json(projetos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar projetos', error });
  }
};

// Obter um projeto pelo ID
const obterProjetoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const projeto = await ProjetoAcao.findByPk(id);
    if (!projeto) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    res.status(200).json(projeto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter projeto', error });
  }
};

// Criar um novo projeto
const criarProjeto = async (req, res) => {
  try {
    const novoProjeto = await ProjetoAcao.create(req.body);
    res.status(201).json(novoProjeto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar projeto', error });
  }
};

// Atualizar um projeto
const atualizarProjeto = async (req, res) => {
  const { id } = req.params;
  try {
    const projetoAtualizado = await ProjetoAcao.update(req.body, { where: { id_projetoacao: id } });
    if (projetoAtualizado[0] === 0) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    res.status(200).json({ message: 'Projeto atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar projeto', error });
  }
};

// Deletar um projeto
const deletarProjeto = async (req, res) => {
  const { id } = req.params;
  try {
    const projetoDeletado = await ProjetoAcao.destroy({ where: { id_projetoacao: id } });
    if (!projetoDeletado) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    res.status(200).json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar projeto', error });
  }
};

module.exports = {
  listarProjetos,
  obterProjetoPorId,
  criarProjeto,
  atualizarProjeto,
  deletarProjeto,
};
