const userRoutes = require('./UserRoutes');
const postsRoutes = require('./PostsRoutes')
const bodyParser = require('body-parser');

/**
 * Exportação de rotas
 * @module Exports Rotas
 */

module.exports = (app) => {
	app.use(
        bodyParser.json(), 
        bodyParser.urlencoded({ extended: false }),
        userRoutes,
        postsRoutes
    );
};
