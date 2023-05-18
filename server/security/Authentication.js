const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserServices } = require('../services');
const userService = new UserServices();
const tokenSecret = process.env.TOKEN_SECRET || 'secret';

/**
 * Classe de autenticação de login e token
 * @class Authentication
 */

class Authentication {
	static async initializeLoginVerifier() {
		const authenticateUser = async (email, password, done) => {
			const user = await userService.readOneRecordByEmail(email);
			try {
				if (user == null) {
					throw new Error('Email e/ou senha inválidos');
				}

				if (await bcrypt.compare(password, user.password)) {
					done(null, user);
				} else {
					throw new Error('Email e/ou senha inválidos');
				}
			} catch (error) {
				done(error);
			}
		};

		passport.use(
			new LocalStrategy(
				{
					usernameField: 'email',
					passwordField: 'password',
					session: false,
				},
				authenticateUser
			)
		);
	}

	static async initializeTokenVerifier() {
		const authenticateToken = async (token, done) => {
			try {
				const payload = jwt.verify(token, tokenSecret);
				const user = await userService.readOneRecord(payload.id);
				done(null, user);
			} catch (error) {
				done(error);
			}
		};

		passport.use(new BearerStrategy(authenticateToken));
	}
}

module.exports = Authentication;
