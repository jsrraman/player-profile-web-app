"use strict";

let Dispatcher = require('../dispatcher');
let ActionTypes = require('../constants/actionTypes');
let EventEmitter = require('events').EventEmitter; // For broadcasting a given event
let assign = require('object-assign');
let _ = require('lodash');

let CHANGE_EVENT = 'change';

let _players = [];

// The below statement has the following meaning
// Take an empty object, add the event emitter prototype capability and further
// add our custom behaviour (three methods
// 1. Add change listener
// 2. Remove change listener
// 3. Emit change
// These three methods are common to any store
let PlayerStore = assign({}, EventEmitter.prototype, {
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