/**
 * Classe contendo um switch com possíveis erros gerados a partir dos controladores
 * @class ErrorFinder
 */

class ErrorFinder {
	static findError(error, res) {
		switch (error.name) {
			case 'EmailNotVerified':
                return res.status(401).json({ message: 'Este email não está verificado' });
				
			case 'SequelizeDatabaseError':
				return res.status(403).json({
					message: 'Não há dados suficientes para completar o registro',
				});

            case 'ProductsNotDefined':
                return res.status(403).json({ message: 'A quantidade dos produtos não foi definida' });

            case 'InvalidProducts':
                return res.status(403).json({ message: "Existem produtos inválidos no campo 'quantidade'" })

            case 'UrlNotDefined':
                return res.status(403).json({ message: 'A url de retorno não foi definida' });

            case 'IdNotFoundError':
                return res.status(404).json({ message: error.message });

			case 'SequelizeUniqueConstraintError':
				return res.status(409).json({ message: `O campo ${error.errors[0].path} já está cadastrado no banco de dados` });

            case 'SequelizeForeignKeyConstraintError':
				let field = error.original.detail
				field = field.substring(field.indexOf("(") + 1, field.indexOf(")"))
                return res.status(409).json({ message: `ID do campo ${field} não existe` });

			case 'SequelizeConnectionError':
				return res.status(503).json({ message: 'Não foi possível conectar com o banco de dados' });

			default:
                console.log(error.name)
				return res.status(500).json({ message: error.message });
		}
	}
}

module.exports = ErrorFinder;