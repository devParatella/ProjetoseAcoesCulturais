// controllers/espacoCulturalController.js
const EspacoCultural = require('../models/espacoCulturalModel');

// Listar todos os espaços culturais
const listarEspacosCulturais = async (req, res) => {
  try {
    const espacos = await EspacoCultural.findAll();
    res.status(200).json(espacos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar espaços culturais', error });
  }
};

// Obter um espaço cultural pelo ID
const obterEspacoCulturalPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const espaco = await EspacoCultural.findByPk(id);
    if (!espaco) {
      return res.status(404).json({ message: 'Espaço cultural não encontrado' });
    }
    res.status(200).json(espaco);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter espaço cultural', error });
  }
};

// Criar um novo espaço cultural
const criarEspacoCultural = async (req, res) => {
  try {
    const novoEspaco = await EspacoCultural.create(req.body);
    res.status(201).json(novoEspaco);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar espaço cultural', error });
  }
};

// Atualizar um espaço cultural
const atualizarEspacoCultural = async (req, res) => {
  const { id } = req.params;
  try {
    const espacoAtualizado = await EspacoCultural.update(req.body, { where: { id_espacocultural: id } });
    if (espacoAtualizado[0] === 0) {
      return res.status(404).json({ message: 'Espaço cultural não encontrado' });
    }
    res.status(200).json({ message: 'Espaço cultural atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar espaço cultural', error });
  }
};

// Deletar um espaço cultural
const deletarEspacoCultural = async (req, res) => {
  const { id } = req.params;
  try {
    const espacoDeletado = await EspacoCultural.destroy({ where: { id_espacocultural: id } });
    if (!espacoDeletado) {
      return res.status(404).json({ message: 'Espaço cultural não encontrado' });
    }
    res.status(200).json({ message: 'Espaço cultural deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar espaço cultural', error });
  }
};

module.exports = {
  listarEspacosCulturais,
  obterEspacoCulturalPorId,
  criarEspacoCultural,
  atualizarEspacoCultural,
  deletarEspacoCultural,
};
