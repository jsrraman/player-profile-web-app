"use strict";

var React = require("react");
var AppBar = require("material-ui/lib/app-bar");
var CountryList = require("./countryList");

var App = React.createClass({
    _toggleCountryList: function () {
        this.refs.countryList._toggleNav();
    },

    render: function () {
        var appBarStyle = {
            textAlign: "center"
        };

        return (
            <div>
                <AppBar
                    title="Player Profile"
                    style={appBarStyle}
                    onLeftIconButtonTouchTap={this._toggleCountryList}/>

                <CountryList ref="countryList"/>
            </div>
        )
    }
});

module.exports = App;