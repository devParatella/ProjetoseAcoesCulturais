const Anexo = require('../models/anexoModel');

// Listar todos os anexos
exports.getAnexos = async (req, res) => {
  try {
    const anexos = await Anexo.findAll();
    res.status(200).json(anexos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Criar um novo anexo
exports.createAnexo = async (req, res) => {
  try {
    const anexo = await Anexo.create(req.body);
    res.status(201).json(anexo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
