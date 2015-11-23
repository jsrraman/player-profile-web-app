"use strict";

let Dispatcher = require("../dispatcher");
let PlayerApi = require("../api/playerProfileApi");
let ActionTypes = require("../constants/actionTypes");

let InitialActionTypes = {
    initApp: function() {
        PlayerApi.getCountries().then(function(response) {
            let json = JSON.parse(response.body);

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