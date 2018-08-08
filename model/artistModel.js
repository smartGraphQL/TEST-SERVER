const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const album = require('../schema/albumModel');

// console.log(album.albumSchema);

let artistSchema = new Schema({
	name: {type: String, required: true}, 
	albums: {type: Array, required: true}, 
})

module.exports = {model: mongoose.model('artist', artistSchema)  }