const userControllers = require('./controllers');
const express = require('express');
const {verifyAuthToken} = require("../middlewares");

const router = express.Router();

router.get('/', [verifyAuthToken,userControllers.getUsers]);
router.post('/', userControllers.createNewUser);
router.get('/:id',[verifyAuthToken,userControllers.getUserWithID])
router.put('/:id',[verifyAuthToken,userControllers.updateUser])
module.exports = router;
