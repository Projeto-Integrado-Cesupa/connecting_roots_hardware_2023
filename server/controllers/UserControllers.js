const { UserServices } = require('../services');
const userServices = new UserServices();
const Encrypting = require('../security/Encrypting');

class UserControllers {
	static async createUser(req, res) {
		const bodyData = req.body;

		try {
			bodyData.password = await Encrypting.generateHash(bodyData.password);
			const user = await userServices.readOneRecordByEmail(bodyData.email);

			if (user == null) {
				var newUser = await userServices.createRecord(bodyData);
			} else {
				throw new Error("Email already registered")
			}
			
			return res.status(201).json(newUser);
		} catch (error) {
			res.status(500).json({message: error.message})
		}
	}
	
	static async login(req, res) {
		try {
			const user = await userServices.readOneRecordByEmail(req.body.email)

			if (user == null) {
				throw new Error("User not found")
			} 
			
			const token = await Encrypting.createJWT(user);
			res.set('Authorization', token);
			res.status(204).send();
		} catch (error) {
			res.status(500).json({message: error.message})
		}
	}
}

module.exports = UserControllers
