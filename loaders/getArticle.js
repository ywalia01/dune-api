'use strict';

var quotes = require('../models/quotes'),
    books = require('../models/books'),
    movies = require('../models/movies'),
    series = require('../models/series'),
    shortStories = require('../models/shortStories'),
    comics = require('../models/comics');

function getRandom(type, number) {
    switch (type) {
        case 'quotes':
            var limit = number > quotes.length ? quotes.length : number;
            var out = new Array(limit);
            var quote;

            for (var i = 0; i < limit; i++) {
                do {
                    quote = quotes[Math.floor(Math.random() * quotes.length)];
                } while (out.indexOf(quote) > -1);
                out[i] = quote;
            }
            return out;
        case 'books':
            var limit = number > books.length ? books.length : number;
            var out = new Array(limit);
            var book;
            for (var i = 0; i < limit; i++) {
                do {
                    book = books[Math.floor(Math.random() * books.length)];
                } while (out.indexOf(book) > -1);
                out[i] = book;
            }
            return out;
        case 'movies':
            var limit = number > movies.length ? movies.length : number;
            var out = new Array(limit);
            var movie;
            for (var i = 0; i < limit; i++) {
                do {
                    movie = movies[Math.floor(Math.random() * movies.length)];
                } while (out.indexOf(movie) > -1);
                out[i] = movie;
            }
            return out;
        case 'series':
            var limit = number > series.length ? series.length : number;
            var out = new Array(limit);
            var serie;
            for (var i = 0; i < limit; i++) {
                do {
                    serie = series[Math.floor(Math.random() * series.length)];
                } while (out.indexOf(serie) > -1);
                out[i] = serie;
            }
            return out;
        case 'stories':
            var limit = number > shortStories.length ? shortStories.length : number;
            var out = new Array(limit);
            var story;
            for (var i = 0; i < limit; i++) {
                do {
                    story = shortStories[Math.floor(Math.random() * shortStories.length)];
                } while (out.indexOf(story) > -1);
                out[i] = story;
            }
            return out;
        case 'comics':
            var limit = number > comics.length ? comics.length : number;
            var out = new Array(limit);
            var comic;
            for (var i = 0; i < limit; i++) {
                do {
                    comic = comics[Math.floor(Math.random() * comics.length)];
                } while (out.indexOf(comic) > -1);
                out[i] = comic;
            }
            return out;
        default:
            return { "Error": "Bad Request" }
    }
}
    
function getArticle(type, id) {
    if (type == 'quotes') {
        if (id <= 0) {
            return quotes[0]
        }
        else if (id > quotes.length) {
            return quotes[quotes.length - 1]
        }
        else {
            return quotes[id - 1]
        }
    }
    else if (type == 'books') {
        if (id <= 0) {
            return books[0]
        }
        else if (id > books.length) {
            return books[books.length - 1]
        }
        else {
            return books[id - 1]
        }
    }
    else if (type == 'movies') {
        if (id <= 0) {
            return movies[0]
        }
        else if (id > movies.length) {
            return movies[movies.length - 1]
        }
        else {
            return movies[id - 1]
        }
    }
    else if (type == 'series') {
        if (id <= 0) {
            return series[0]
        }
        else if (id > series.length) {
            return series[series.length - 1]
        }
        else {
            return series[id - 1]
        }
    }
    else if (type == 'stories') {
        if (id <= 0) {
            return shortStories[0]
        }
        else if (id > stories.length) {
            return shortStories[shortStories.length - 1]
        }
        else {
            return shortStories[id - 1]
        }
    }
    else if (type == 'comics') {
        if (id <= 0) {
            return comics[0]
        }
        else if (id > comics.length) {
            return comics[comics.length - 1]
        }
        else {
            return comics[id - 1]
        }
    }
    else {
        return { "Error": "Bad Request"}
    }
}

module.exports = { getRandom, getArticle };