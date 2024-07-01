const express = require('express');
const {
  listarEspacosCulturais,
  obterEspacoCulturalPorId,
  criarEspacoCultural,
  atualizarEspacoCultural,
  deletarEspacoCultural
} = require('../controllers/espacoCulturalController');

const espacoCulturalRoute = express.Router();

espacoCulturalRoute.get('/', listarEspacosCulturais);
espacoCulturalRoute.get('/:id', obterEspacoCulturalPorId);
espacoCulturalRoute.post('/', criarEspacoCultural);
espacoCulturalRoute.put('/:id', atualizarEspacoCultural);
espacoCulturalRoute.delete('/:id', deletarEspacoCultural);

module.exports = espacoCulturalRoute;
