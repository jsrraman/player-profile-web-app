"use strict";

var Dispatcher = require("../dispatcher");
var PlayerApi = require("../api/playerApi");
var ActionTypes = require("../constants/actionTypes");

var InitialActionTypes = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {

            }
        });
    }
};

module.exports = InitialActionTypes;