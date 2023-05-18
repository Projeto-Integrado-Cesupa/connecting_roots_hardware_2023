const { Router } = require('express');
const PostsControllers = require('../controllers/PostsControllers');
const Middlewares = require('../security/Middlewares');

const router = Router();

/**
 * Rotas para métodos de Usuários
 * @module Rotas Usuários
 */

router
	.post('/post/create', Middlewares.bearer, PostsControllers.createPost)	

module.exports = router;
