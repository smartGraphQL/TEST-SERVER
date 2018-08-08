const mongoose = require('mongoose');

const { Schema } = mongoose;
const album = require('albumSchema');

console.log(album.albumSchema);

const artistSchema = new Schema({
  name: { type: String, required: true },
  albums: [album.albumSchema],
});

module.exports = {
  model: mongoose.model('artist', artistSchema),
  artistSchema,
};
