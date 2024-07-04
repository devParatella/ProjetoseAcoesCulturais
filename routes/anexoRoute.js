const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  listarAnexos,
  obterAnexoPorId,
  criarAnexo,
  atualizarAnexo,
  deletarAnexo
} = require('../controller/anexoController');

const anexoRoute = express.Router();

// Configuração do Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

anexoRoute.get('/', listarAnexos);
anexoRoute.get('/:id', obterAnexoPorId);
anexoRoute.post('/', upload.single('file'), criarAnexo);
anexoRoute.put('/:id', upload.single('file'), atualizarAnexo);
anexoRoute.delete('/:id', deletarAnexo);

module.exports = anexoRoute;
