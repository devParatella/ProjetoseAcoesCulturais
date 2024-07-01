const express = require('express');
const { getAnexos, createAnexo } = require('../controller/anexoController');

const anexoRoute = express.Router();

anexoRoute.get('/', getAnexos);
anexoRoute.post('/', createAnexo);

module.exports = anexoRoute;
