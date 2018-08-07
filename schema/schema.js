const graphQL = require('graphql');
const dummyData = require('./dummyData');

let {
	artists,
	albums,
	songs
} = dummyData;

const {
	graphQLObjectType,
	graphQLString,
	graphQLInt,
	graphQLID,
	graphQLSchema
} = graphQL

const AlbumType = new graphQLObjectType({
	name: 'album',
	fields: function() {
		return {
			name: {type: graphQLString},
			artist: {type: graphQLString},
			songs: [songsType],
			id: graphQLID
		}
	}
})

const SongsType = new graphQLObjectType({
	name: 'song',
	fields: function(){
		return {
			name: {type: graphQLString},
			artist: [ArtistType],
			album: [AlbumType],
			id: graphQLID
		}
	}
})

const ArtistType = new graphQLObjectType({
	name: 'artist',
	fields: function(){
		return {
			name: {type: graphQLString},
			albums: [AlbumType],
			id: graphQLID
		}
	}
})

const rootQueryType = new graphQLObjectType({
	name: 'query',
	fields: {
		artist: {
			type: ArtistType
			args: {
				id: graphQLID
			}
		}
	}
})


