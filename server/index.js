const express = require('express');
const routes = require('./routes');
const Authentication = require('./security/Authentication');
const cors = require('cors');

const app = express();
app.use(cors({
	allowedHeaders: ['Content-Type'],
}))
const port = 3100;

Authentication.initializeLoginVerifier();
Authentication.initializeTokenVerifier();

routes(app);

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});