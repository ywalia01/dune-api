'use strict';

var express = require('express');
var getArticle = require('./loaders/getArticle')
var app = express();
var port = process.env.PORT || 3001;

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/:type/:num?', function (req, res) {
    console.log(req.params);
    res.send(getArticle.getRandom(req.params.num || 1, req.params.type));
});

app.get('/:type/id/:id?', function (req, res) {
    console.log(req.params);
    res.send(getArticle.getArticleFromId(req.params.id || 1, req.params.type));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})