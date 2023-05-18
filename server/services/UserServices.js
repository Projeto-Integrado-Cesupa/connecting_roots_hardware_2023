const Services = require('./Services');
const database = require('../models');

/**
 * Regras de negócio específicos para tabela de Usuários
 * @class UserServices
 * @extends Services
 */

class UserServices extends Services {
	constructor() {
		super('User');
	}

	async readOneRecordByEmail(email) {
		return database[this.model_name].findOne({ where: { email: email } });
	}
}

module.exports = UserServices;
