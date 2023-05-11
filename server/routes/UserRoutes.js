const { Router } = require('express');
const UserControllers = require('../controllers/UserControllers');
const Middlewares = require('../security/Middlewares');

const router = Router();

/**
 * Rotas para métodos de Usuários
 * @module Rotas Usuários
 */

router
	.post('/sign-up', UserControllers.createUser)
	.post('/login', Middlewares.local, UserControllers.login)	

module.exports = router;
