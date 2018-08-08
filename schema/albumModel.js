const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artist = require('./artistModel');

console.log(artist.artistModel);

let albumSchema = new Schema({
	name: {type: String, required: true}, 
	artist: [artist.artistModel],
	songs: {type: Array, required: true},
})

module.exports = { model: mongoose.model('album', albumSchema),
				   albumSchema: albumSchema
 }