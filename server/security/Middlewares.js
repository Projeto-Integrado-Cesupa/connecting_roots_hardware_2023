const passport = require('passport');

/**
 * Middleware de autenticação e verificação
 * @module Middlewares
 */

module.exports = {
	local: (req, res, next) => {
		if (Object.keys(req.body).length === 0 || req.body.email == undefined || req.body.password == undefined) {
			return res.status(401).json({ message: 'Email e/ou senha inválidos' });
		}
		passport.authenticate('local', { session: false }, (error, user) => {
			if (error) {
				return res.status(401).json({ message: error.message });
			}
			req.user = user;
			return next();
		})(req, res, next);
	},
	bearer: (req, res, next) => {
		if (req.headers['authorization'] == undefined || !req.headers['authorization'].includes('Bearer ')) {
			return res.status(401).json({ message: 'invalid token' });
		}
		passport.authenticate('bearer', { session: false }, (error, user) => {
			if (error) {
				return res.status(401).json({ message: error.message });
			}
			req.user = user;
			return next();
		})(req, res, next);
	},
};
