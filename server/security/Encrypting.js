const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET || 'secret';

/**
 * Classe de encriptação e geração de token
 * @class Encrypting
 */

class Encrypting {
	static async generateHash(password) {
		const hashCost = 12;
		return bcrypt.hash(password, hashCost);
	}

	static async createJWT(user) {
		const payload = { id: user.id };
		return jwt.sign(payload, tokenSecret, {
			expiresIn: 7200,
		});
	}
}

module.exports = Encrypting;
