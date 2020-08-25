const jsonWebToken = require('jsonwebtoken');
const User = require('../models/User');
async function getUsers(req, res) {
	const users = await User.find({});
	res.json(users) ;
}
async function getUserWithID(req, res) {
	if(req.user.id !== req.params.id) {
		res.status(403).json({error:'error you cant access this resource'})
	}
	const {id} = req.params
	try{
		const user = await User.find({_id:id});
		if(!user) {
			res.json({error:`no user found`}) ;
		}
		res.json(user) ;
	}
	catch (e) {
		res.status(500).json({error:'server internal error'}) ;
	}
	res.send('get specific user with id');
}
async function createNewUser(req, res) {
	if (!req.body) {
		res.status(403).json({ error: 'no body found in the request' });
	}
	if (!req.body.username || !req.body.email) {
		res.status(403).json({ error: 'no username or email found' });
	}
	if (!req.body.password) {
		res.status(403).json({ error: 'please provide password' });
	}
	try {
		console.log('what') ;
		const user = new User(req.body);
		await user.save();
		console.log('what2') ;
		const token = jsonWebToken.sign({ id: user._id }, process.env.JWT_SECERT);
		res.status(201).json({ user, token });
	}
	catch (e) {
		console.log(Object.entries(e));
		res.status(500).json({error:'error creating new user'})
	}

}
function updateUser(req, res) {
	res.send('to update a user');
}
module.exports = {
	getUsers,
	getUserWithID,
	updateUser,
	createNewUser,
};
