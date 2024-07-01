const ProjetoAcao = require('../models/projetoAcaoModel');

// Listar todos os projetos/ações
exports.getProjetosAcoes = async (req, res) => {
  try {
    const projetos = await ProjetoAcao.findAll();
    res.status(200).json(projetos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Criar um novo projeto/ação
exports.createProjetoAcao = async (req, res) => {
  try {
    const projeto = await ProjetoAcao.create(req.body);
    res.status(201).json(projeto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
