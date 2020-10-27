const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat,
    GraphQLSchema
} = require('graphql');

const repository = require('./repository');

// Movie List Type
const movieListType = new GraphQLObjectType({
    name: 'MovieList',
    fields: () => ({
        id: { type: GraphQLString },
        item_count: { type: GraphQLInt },
        items: { type: GraphQLList(movieType) }
    })
});

// Movie Type
const movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        vote_average: { type: GraphQLFloat },
        poster_path: { type: GraphQLString },
        overview: { type: GraphQLString },
        release_date: { type: GraphQLString }
    })
});

const rootType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movies: {
            type: movieListType,
            resolve() {
                return repository.getAllMovies();
            }
        },
        movie: {
            type: movieType,
            args: {
                movie_id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return repository.getMovie(args.movie_id);
            }
        }
    }
});

const rootSchema = new GraphQLSchema({
    query: rootType
});

module.exports = rootSchema;