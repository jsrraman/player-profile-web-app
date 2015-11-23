"use strict";

var Constants = require("../constants/appConstants");
var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));

// Note: Each method returns a promise
var PlayerProfileApi = {
    getCountries: function () {
        //var options = {
        //    uri: Constants.getCountriesUrl,
        //    json: true
        //};

        //requestPromise(options)
        //    .then (function (response) {
        //        return response.result;
        //    })
        //    .catch(function (err) {
        //        return null;
        //    });

        return request.getAsync(Constants.getCountriesUrl);
    }
};

module.exports = PlayerProfileApi;
