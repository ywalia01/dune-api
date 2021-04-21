'use strict';

var movies = require('../models/movies');

module.exports = {
    getRandom: function getRandom(numberOfMovies) {
        var limit = numberOfMovies > movies.length ? movies.length : numberOfMovies;

        var out = new Array(limit);
        var movie;

        for (var i = 0; i < limit; i++) {
            do {
                movie = movies[Math.floor(Math.random() * movies.length)];
            } while (out.indexOf(movie) > -1);
            out[i] = movie;
        }
        return out;
    },

    getMovieFromId: function getMovieFromId(movieId) {
        if (movieId < 0) {
            return movies[1]
        }
        else if (movieId > movies.length) {
            return movies[movies.length - 1]
        }
        else {
            return movies[movieId-1]
        }
    }
};