const { PostsServices } = require('../services');
const postsServices = new PostsServices();
const tokenSecret = process.env.TOKEN_SECRET || 'secret';
const jwt = require('jsonwebtoken');

class PostsControllers {
    static async createPost(req, res) {
        const bodyData = req.body;
		
        try {
            const userPayload = jwt.verify(req.headers['authorization'].replace('Bearer ', ''), tokenSecret);
            bodyData.user_id = userPayload.id
            var newPost = await postsServices.createRecord(bodyData)
			return res.status(201).json(newPost);
		} catch (error) {
			res.status(500).json({message: error.message})
		}
    }

    // static async showAllPostsFromUser(req, res) {
    //     const bodyData = req.body;

    //     try {
    //         postsServices.readAllRecords()
	// 		return res.status(201).json(newPost);
	// 	} catch (error) {
	// 		res.status(500).json({message: error.message})
	// 	}
    // }
}

module.exports = PostsControllers