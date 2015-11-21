"use strict";

var Constants = require("../constants/appConstants");
//var requestPromise = require("request-promise");
var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));

// Note: Each method returns a promise
var PlayerApi = {
    getAllPlayerCountries: function () {
        //var options = {
        //    uri: Constants.getPlayersCountriesUrl,
        //    json: true
        //};

        //requestPromise(options)
        //    .then (function (response) {
        //        return response.result;
        //    })
        //    .catch(function (err) {
        //        return null;
        //    });

        return request.getAsync(Constants.getPlayersCountriesUrl);
    }
};

module.exports = PlayerApi;
