"use strict";

let React = require("react");
let AppBar = require("material-ui/lib/app-bar");
let CountryList = require("./countryList");

let App = React.createClass({
    _toggleCountryList: function () {
        this.refs.countryList._toggleNav();
    },

    render: function () {
        let appBarStyle = {
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