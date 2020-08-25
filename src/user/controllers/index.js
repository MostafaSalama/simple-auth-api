const userModel = require('../models/User');
function getUsers(req, res) {
	res.send('all users');
}
function getUserWithID(req, res) {
	res.send('get specific user with id');
}
function createNewUser(req, res) {
	res.send('to create user');
}
function updateUser(req, res) {
	res.send('to update a user');
}
module.exports = {
    getUsers,getUserWithID,updateUser,createNewUser
};
