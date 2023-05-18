const Services = require('./Services');
const database = require('../models');

/**
 * Regras de negócio específicos para tabela de Usuários
 * @class UserServices
 * @extends Services
 */

class PostsServices extends Services {
	constructor() {
		super('Posts');
	}
}

module.exports = PostsServices;
