"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

// Note:
// In order the tap events to work we need the following work around
//http://material-ui.com/#/get-started/installation
var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(<App/>, document.getElementById("App"));