const express = require('express');
const graphQLHttp = require('express-graphql');
const mongoose = require('mongoose');
const secret = require('./secret');
const bodyParser = require('body-parser');
const Album = require('./schema/albumModel');

let uri = `mongodb://${secret.database.username}:${secret.database.password}@ds215502.mlab.com:15502/yodadb`

mongoose.connect(uri, ()=> console.log('Connected to MongoDB'));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./' )); 

app.get('/albums', (req, res) => {
  Album.find({}, (err, data) => {
	if(err) res.send(err);
	res.send(data);
  });
});

app.post('/albums', (req, res) => {
	console.log(req);
  const newAlbum = new Album({ name: req.query.name, artist: req.query.artist, year: req.query.year, songs: [req.query.songs], genre: req.query.genre, label: req.query.label });
  newAlbum.save((err, data) => {
	if(err) res.send(err);
	res.send(data);
  })
});

app.listen(3333, ()=> console.log("Magic is happening on port 3333"));

