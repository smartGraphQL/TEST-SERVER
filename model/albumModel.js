const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artist = require('./artistModel');

let albumSchema = new Schema({
	name: {type: String, required: true}, 
	artist: [artist.artistModel],
	date: {type: Date, default: Date.now()},
	songs: {type: Array, required: true},
	genre: {type: String},
	label: {type: String}
})

module.exports = { model: mongoose.model('album', albumSchema),
				   albumSchema: albumSchema
 }