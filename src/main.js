"use strict";

let React = require("react");
let ReactDOM = require("react-dom");
let App = require("./components/app");
let PlayerProfileActions = require("./actions/playerProfileActions");

// Note:
// In order the tap events to work we need the following work around
//http://material-ui.com/#/get-started/installation
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

PlayerProfileActions.getCountries();

ReactDOM.render(<App/>, document.getElementById("App"));