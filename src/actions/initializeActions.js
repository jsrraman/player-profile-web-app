"use strict";

var Dispatcher = require("../dispatcher");
var PlayerApi = require("../api/playerProfileApi");
var ActionTypes = require("../constants/actionTypes");

var InitialActionTypes = {
    initApp: function() {
        PlayerApi.getCountries().then(function(response) {
            var json = JSON.parse(response.body);

            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                players: json.result
            });
        }).catch(function(err){
            console.log("Error->"+ err);
        });
    }
};

module.exports = InitialActionTypes;