const express = require('express');
const usuarioRoutes = require('./usuarioRoute');
const projetoAcaoRoutes = require('./projetoAcaoRoute');
const anexoRoutes = require('./anexoRoute');
const espacoCulturalRoutes = require('./espacoCulturalRoute');
const notificacaoRoutes = require('./notificacaoRoute');

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/projetosAcoes', projetoAcaoRoutes);
router.use('/anexos', anexoRoutes);
router.use('/espacosCulturais', espacoCulturalRoutes);
router.use('/notificacoes', notificacaoRoutes);

module.exports = router;

