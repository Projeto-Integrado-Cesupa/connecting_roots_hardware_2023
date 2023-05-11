const express = require('express');
const routes = require('./routes');
const path = require('path')
const Authentication = require('./security/Authentication');

const app = express();
const port = 3100;

Authentication.initializeLoginVerifier();
Authentication.initializeTokenVerifier();

routes(app);

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});