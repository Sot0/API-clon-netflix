const mongoose = require('mongoose');

const clearDatabase = () => {
	return new Promise((resolve) => {
		let count = 0; // num de vueltas a la db
		// conocer el máximo de vueltas (num de collections en la db)
		const max = Object.keys(mongoose.connection.collections).length;
		for (const i in mongoose.connection.collections) {
			mongoose.connection.collections[i].remove(() => {
				count++;
				if (count === max) {
					resolve();
				}
			});
		}
	});
};

module.exports = async function setUpTest() {
	await clearDatabase();
};