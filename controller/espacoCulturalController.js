const EspacoCultural = require('../models/espacoCulturalModel');

// Listar todos os espaços culturais
exports.getEspacosCulturais = async (req, res) => {
  try {
    const espacos = await EspacoCultural.findAll();
    res.status(200).json(espacos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Criar um novo espaço cultural
exports.createEspacoCultural = async (req, res) => {
  try {
    const espaco = await EspacoCultural.create(req.body);
    res.status(201).json(espaco);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
