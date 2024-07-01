const Anexo = require('../models/anexoModel');


const listarAnexos = async (req, res) => {
  try {
    const anexos = await Anexo.findAll();
    res.status(200).json(anexos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar anexos', error });
  }
};

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

const criarAnexo = async (req, res) => {
  try {
    const novoAnexo = await Anexo.create(req.body);
    res.status(201).json(novoAnexo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar anexo', error });
  }
};

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
