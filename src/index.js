const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config();
mongoose
	.connect('mongodb://localhost:27017/test', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex:true
	})
	.then(() => {
		console.log('connected');
	}).catch(err=>{
		console.log('error') ;
})
const userRoutes = require('./user/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
	res.send('Hello world');
});
app.use('/users', userRoutes);
app.listen(process.env.PORT || 3000, () => {
	console.log('app is running at process 3000');
});
