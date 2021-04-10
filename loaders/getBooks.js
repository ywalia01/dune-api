'use strict';

var books = require('../models/books');

module.exports = {
    getRandom: function getRandom(numberOfBooks) {
        var limit = numberOfBooks > books.length ? books.length : numberOfBooks;

        var out = new Array(limit);
        var book;

        for (var i = 0; i < limit; i++) {
            do {
                book = books[Math.floor(Math.random() * books.length)];
            } while (out.indexOf(book) > -1);
            out[i] = book;
        }
        return out;
    },

    getBookFromId: function getBookFromId(bookId) {
        if (bookId < 0) {
            return books[1]
        }
        else if (bookId > books.length) {
            return books[books.length - 1]
        }
        else {
            return books[bookId-1]
        }
    }
};