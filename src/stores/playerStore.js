"use strict";

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; // For broadcasting a given event
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _players = [];

// The below statement has the following meaning
// Take an empty object, add the event emitter prototype capability and further
// add our custom behaviour (three methods
// 1. Add change listener
// 2. Remove change listener
// 3. Emit change
// These three methods are common to any store
var PlayerStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getCountries: function () {
        return _players;
    }
});

// Private section which is not exposed to the public
Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
        {
            _players = action.players;
            PlayerStore.emitChange();
            break;
        }

        default:
        {
            console.log("None of the actionType matched !!!");
        }
    }
});

module.exports = PlayerStore;