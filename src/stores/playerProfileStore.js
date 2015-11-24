"use strict";

let Dispatcher = require('../dispatcher');
let ActionTypes = require('../constants/actionTypes');
let EventEmitter = require('events').EventEmitter; // For broadcasting a given event
let assign = require('object-assign');
let _ = require('lodash');
import * as Events from "../constants/appEvents";

let _countries = [], _players = [];

// The below statement has the following meaning
// Take an empty object, add the event emitter prototype capability and further
// add our custom behaviour (three methods
// 1. Add change listener
// 2. Remove change listener
// 3. Emit change
// These three methods are common to any store
let PlayerProfileStore = assign({}, EventEmitter.prototype, {
    addEventListener: function (eventType, callback) {
        this.on(eventType, callback);
    },

    removeEventListener: function (eventType, callback) {
        this.removeListener(eventType, callback);
    },

    emitEvent: function (eventType) {
        this.emit(eventType);
    },

    getCountries: function () {
        return _countries;
    },

    getPlayers: function() {
        return _players;
    }
});

// Private section which is not exposed to the public
Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.GET_COUNTRIES:
        {
            _countries = action.countries;
            PlayerProfileStore.emitEvent(Events.GET_COUNTRIES_API_COMPLETED_EVENT);
            break;
        }

        case ActionTypes.GET_PLAYERS_FOR_COUNTRY:
        {
            _players = action.players;
            PlayerProfileStore.emitEvent(Events.GET_PLAYERS_FOR_COUNTRY_API_COMPLETED_EVENT);
            break;
        }

        default:
        {
            console.log("None of the actionType matched !!!");
            break;
        }
    }
});

module.exports = PlayerProfileStore;