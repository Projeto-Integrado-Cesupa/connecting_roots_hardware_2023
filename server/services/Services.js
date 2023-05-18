const database = require('../models');
const DateFormat = require('../utils/DateFormat');

/**
 * Regras de negócio gerais para todas as tabelas
 * @class Services
 */

class Services {
	constructor(model_name) {
		this.model_name = model_name;
	}

	async readAllRecords(max, offset) {
		let records = await database[this.model_name].findAll({
			order: [['id', 'ASC']],
			limit: max,
			offset: offset * max,
		});
		DateFormat.formatToCurrentTimeZone(records);
		return records;
	}

	async readOneRecord(id) {
		let record = await database[this.model_name].findOne({ where: { id: id } });
		if (record == null) {
			return record;
		}
		DateFormat.formatToCurrentTimeZone(record);
		return record;
	}

	async createRecord(data) {
		let record = await database[this.model_name].create(data);
		DateFormat.formatToCurrentTimeZone(record);
		return record;
	}

	async updateRecord(new_data, id) {
		new_data.updatedAt = new Date();
		new_data.updatedAt.setHours(new_data.updatedAt.getHours() - 3);
		return database[this.model_name].update(new_data, {
			where: { id: id },
		});
	}

	async deleteRecord(id) {
		return database[this.model_name].destroy({
			where: { id: id },
		});
	}
}

module.exports = Services;
