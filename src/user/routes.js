const userControllers = require('./controllers') ;
const express = require('express') ;

const router = express.Router() ;

router.get('/',userControllers.getUsers) ;

module.exports = router ;
