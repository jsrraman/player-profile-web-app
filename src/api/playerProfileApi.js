"use strict";

let Constants = require("../constants/appConstants");
let Promise = require("bluebird");
let request = Promise.promisifyAll(require("request"));

// Note: Each method returns a promise
let PlayerProfileApi = {
    getCountries: function () {
        return request.getAsync(Constants.getCountriesUrl);
    }
};

module.exports = PlayerProfileApi;
