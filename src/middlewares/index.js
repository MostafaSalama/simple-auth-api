const jsonWebToken = require('jsonwebtoken');
function verifyAuthToken(req, res, next) {
	const authHeader = req.headers.authorization;
	if(!authHeader) {
		res.status(401).json({error:`You don't have access to this resource`})
	}
	const token = authHeader.split(' ')[1];
	console.log(token)
	try {
		req.user = jsonWebToken.verify(token, process.env["JWT_SECERT"]) ;
		next();

	}
	catch (e) {
		console.log(e.name)
		console.log(Object.entries(e)) ;
		res.status(401).json({error:'invalid token'})
	}
}

module.exports = {
	verifyAuthToken,
};
