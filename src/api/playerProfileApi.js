"use strict";

//let Constants = require("../constants/appConstants");
import * as Constants from "../constants/appConstants";
let Promise = require("bluebird");
let request = Promise.promisifyAll(require("request"));

// Note: Each method returns a promise
let PlayerProfileApi = {
    getCountries: function () {
        return request.getAsync(Constants.GET_COUNTRIES_URL);
    },

    getPlayersForCountry: function(countryId) {
        return request.getAsync(Constants.GET_PLAYERS_FOR_COUNTRY_URL + countryId);
    }
};

module.exports = PlayerProfileApi;