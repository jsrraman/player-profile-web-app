"use strict";

let Dispatcher = require("../dispatcher");
let PlayerProfileApi = require("../api/playerProfileApi");
let ActionTypes = require("../constants/actionTypes");

let PlayerProfileActions = {
    getCountries: function () {
        PlayerProfileApi.getCountries().then(function (response) {
            let json = JSON.parse(response.body);

            Dispatcher.dispatch({
                actionType: ActionTypes.GET_COUNTRIES,
                countries: json.result
            });
        }).catch(function (err) {
            console.log("Error->" + err);
        });
    },

    getPlayersForCountry: function (countryId) {
        PlayerProfileApi.getPlayersForCountry(countryId).then(function (response) {
            let json = JSON.parse(response.body);

            Dispatcher.dispatch({
                actionType: ActionTypes.GET_PLAYERS_FOR_COUNTRY,
                players: json.result
            });
        }).catch(function (err) {
            console.log("Error->" + err);
        });
    }
};


module.exports = PlayerProfileActions;