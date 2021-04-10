'use strict';

var quotes = require('../models/quotes');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        var limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote = quotes[Math.floor(Math.random() * quotes.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }
        return out;
    },

    getQuoteFromId: function getQuoteFromId(quoteId) {
        if (quoteId < 0) {
            return quotes[1]
        }
        else if (quoteId > quotes.length) {
            return quotes[quotes.length - 1]
        }
        else {
            return quotes[quoteId-1]
        }
    }
};