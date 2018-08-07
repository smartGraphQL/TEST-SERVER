const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const album = require('albumSchema');

console.log(album.albumSchema);

let artistSchema = new Schema({
	name: {type: String, required: true}, 
	albums: [album.albumSchema]
})

module.exports = {model: mongoose.model('artist', artistSchema),
				  artistSchema: artistSchema
				  }