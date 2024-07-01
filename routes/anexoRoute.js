const express = require('express');
const {
  listarAnexos,
  obterAnexoPorId,
  criarAnexo,
  atualizarAnexo,
  deletarAnexo
} = require('../controller/anexoController');

const anexoRoute = express.Router();

anexoRoute.get('/', listarAnexos);
anexoRoute.get('/:id', obterAnexoPorId);
anexoRoute.post('/', criarAnexo);
anexoRoute.put('/:id', atualizarAnexo);
anexoRoute.delete('/:id', deletarAnexo);

module.exports = anexoRoute;
