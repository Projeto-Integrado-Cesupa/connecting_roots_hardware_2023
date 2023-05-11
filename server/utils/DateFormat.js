/**
 * Classe de utilidade que formata objetos do tipo Date
 * @class DateFormat
 */

class DateFormat {
	static formatToCurrentTimeZone(record) {
		if (Array.isArray(record)) {
			for (let i = 0; i < record.length; i++) {
				record[i].createdAt.setHours(record[i].createdAt.getHours() - 3);
				record[i].updatedAt.setHours(record[i].updatedAt.getHours() - 3);
			}
		} else {
			record.createdAt.setHours(record.createdAt.getHours() - 3);
			record.updatedAt.setHours(record.updatedAt.getHours() - 3);
		}
	}
}

module.exports = DateFormat;
