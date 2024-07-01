// controllers/anexoController.js
const Anexo = require('../models/anexoModel');

// Listar todos os anexos
const listarAnexos = async (req, res) => {
  try {
    const anexos = await Anexo.findAll();
    res.status(200).json(anexos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar anexos', error });
  }
};

// Obter um anexo pelo ID
const obterAnexoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const anexo = await Anexo.findByPk(id);
    if (!anexo) {
      return res.status(404).json({ message: 'Anexo não encontrado' });
    }
    res.status(200).json(anexo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter anexo', error });
  }
};

// Criar um novo anexo
const criarAnexo = async (req, res) => {
  try {
    const novoAnexo = await Anexo.create(req.body);
    res.status(201).json(novoAnexo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar anexo', error });
  }
};

// Atualizar um anexo
const atualizarAnexo = async (req, res) => {
  const { id } = req.params;
  try {
    const anexoAtualizado = await Anexo.update(req.body, { where: { id_anexo: id } });
    if (anexoAtualizado[0] === 0) {
      return res.status(404).json({ message: 'Anexo não encontrado' });
    }
    res.status(200).json({ message: 'Anexo atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar anexo', error });
  }
};

// Deletar um anexo
const deletarAnexo = async (req, res) => {
  const { id } = req.params;
  try {
    const anexoDeletado = await Anexo.destroy({ where: { id_anexo: id } });
    if (!anexoDeletado) {
      return res.status(404).json({ message: 'Anexo não encontrado' });
    }
    res.status(200).json({ message: 'Anexo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar anexo', error });
  }
};

module.exports = {
  listarAnexos,
  obterAnexoPorId,
  criarAnexo,
  atualizarAnexo,
  deletarAnexo,
};
