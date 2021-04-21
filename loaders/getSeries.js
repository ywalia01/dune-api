'use strict';

var series = require('../models/series');

module.exports = {
    getRandom: function getRandom(numberOfSeries) {
        var limit = numberOfSeries > series.length ? series.length : numberOfSeries;

        var out = new Array(limit);
        var serie;

        for (var i = 0; i < limit; i++) {
            do {
                serie = series[Math.floor(Math.random() * series.length)];
            } while (out.indexOf(serie) > -1);
            out[i] = serie;
        }
        return out;
    },

    getSerieFromId: function getSerieFromId(serieId) {
        if (serieId < 0) {
            return series[1]
        }
        else if (serieId > series.length) {
            return series[series.length - 1]
        }
        else {
            return series[serieId-1]
        }
    }
};