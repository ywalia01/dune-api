'use strict';

var express = require('express');
var getQuotes = require('./loaders/getQuotes');
var getBooks = require('./loaders/getBooks');
var app = express();
var port = process.env.PORT || 3001;

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/quotes/:num?', function (req, res) {
    res.send(getQuotes.getRandom(req.params.num || 1));
});

app.get('/quote/:id?', function (req, res) {
    res.send(getQuotes.getQuoteFromId(req.params.id || 1));
});

app.get('/books/:num?', function (req, res) {
    res.send(getBooks.getRandom(req.params.num || 1));
});

app.get('/book/:id?', function (req, res) {
    res.send(getBooks.getBookFromId(req.params.id || 1));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})