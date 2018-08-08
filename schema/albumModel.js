const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artist = require('../model/artistModel');

// console.log(artist);

let albumSchema = new Schema({
	name: {type: String, required: true}, 
	artist: {type: String, required: true}, 
	year: {type: String},
	songs: {type: Array, required: true},
	genre: {type: String},
	label: {type: String}  
})

module.exports = mongoose.model('album', albumSchema);