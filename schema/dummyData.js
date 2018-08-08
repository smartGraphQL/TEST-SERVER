const artist = [
  {
    name: 'Muse',
    albums: [albums[0], albums[1]],
  },
  {
    name: 'Westlife',
    albums: [albums[0], albums[1]],
  },
];

let albums = [
  {
    name: 'Absolution',
    artist: artist[0],
    songs: songs[1],
  },
  {
    name: 'CoastToCoast',
    artist: artist[1],
    songs: songs[0],
  },
];

let songs = [
  {
    name: 'UptownGirl',
    artist: artist[1],
    album: albums[1],
  },
  {
    name: 'Stockholm Syndrome',
    artist: artist[0],
    album: albums[0],
  },
];

module.exports = {
  artists,
  albums,
  songs,
};
