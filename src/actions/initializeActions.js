"use strict";

var Dispatcher = require("../dispatcher");
var PlayerApi = require("../api/playerApi");
var ActionTypes = require("../constants/actionTypes");

var InitialActionTypes = {
    initApp: function() {
        PlayerApi.getAllPlayerCountries().then(function(response) {
            //console.log("success->" + response.body);
            var jsonObject = JSON.parse(response.body);

            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                players: jsonObject.result
            });
        }).catch(function(err){
            console.log("Error->"+ err);
        });
    }
};

module.exports = InitialActionTypes;