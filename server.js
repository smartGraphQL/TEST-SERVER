const express = require('express');
const graphQLHttp = require('express-graphql');
const mongoose = require('mongoose');
const secret = require('./secret');

let uri = `mongodb://${secret.database.username}:${secret.database.password}@ds215502.mlab.com:15502/yodadb`

mongoose.connect(uri, ()=> {
	console.log('were connected to Database')
})

const app = express(); 

app.listen(3333, ()=> {
	console.log("they are listening!!")
})