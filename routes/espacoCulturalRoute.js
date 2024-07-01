const express = require('express');
const { getEspacosCulturais, createEspacoCultural } = require('../controller/espacoCulturalController');

const espacoCulturalRoute = express.Router();

espacoCulturalRoute.get('/', getEspacosCulturais);
espacoCulturalRoute.post('/', createEspacoCultural);

module.exports = espacoCulturalRoute;
