const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat,
    GraphQLBoolean,
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

// Trending Movie Type
const trendingMovieType = new GraphQLObjectType({
    name: 'TrendingMovie',
    fields: () => ({
        page: { type: GraphQLInt },
        results: { type: GraphQLList(movieType) }
    })
});

// Search Movie Type
const searchMovieType = new GraphQLObjectType({
    name: 'SearchMovie',
    fields: () => ({
        page: { type: GraphQLInt },
        total_results: { type: GraphQLInt },
        total_pages: { type: GraphQLInt },
        results: { type: GraphQLList(movieType) }
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
        },
        trendingMovies: {
            type: trendingMovieType,
            args: {
                media_type: { type: GraphQLString },
                time_window: { type: GraphQLString }
            },
            resolve(parent, args) {
                return repository.getTrendingMovies(args.media_type, args.time_window);
            }
        },
        searchMovies: {
            type: searchMovieType,
            args: {
                keyword: { type: GraphQLString },
                include_adult: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                return repository.searchMovie(args.keyword, args.include_adult);
            }
        }
    }
});

const rootSchema = new GraphQLSchema({
    query: rootType
});

module.exports = rootSchema;