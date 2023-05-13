const { UserServices } = require('../services');
const userServices = new UserServices();
const Encrypting = require('../security/Encrypting');
const tokenSecret = process.env.TOKEN_SECRET || 'secret';
const jwt = require('jsonwebtoken');

class UserControllers {
	static async createUser(req, res) {
		const bodyData = req.body;

		try {
			if (!bodyData.firstName || !bodyData.lastName || !bodyData.email || !bodyData.cpf || !bodyData.password) {
				throw new Error("Not enough data")
			}
	
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

	static async updateUser(req, res) {
		const bodyData = req.body;

		try {
			if (bodyData.email || bodyData.cpf) {
				throw new Error("Prohibited data modification")
			}
			if (bodyData.password) {
				bodyData.password = await Encrypting.generateHash(bodyData.password);
			}
			const userPayload = jwt.verify(req.headers['authorization'].replace('Bearer ', ''), tokenSecret);
			await userServices.updateRecord(bodyData, userPayload.id)
			return res.status(200).json({message: "User modified with success"});
		} catch (error) {
			res.status(500).json({message: error.message})
		}
	}
}

module.exports = UserControllers
