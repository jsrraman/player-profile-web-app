"use strict";

let React = require("react");
let AppBar = require("material-ui/lib/app-bar");
let CountryList = require("./countryList");
let PlayerList = require("./playerList");
import ProgressDialog from "./common/progressDialog";

let App = React.createClass({
    _toggleCountryList: function () {
        this.refs.countryList._toggleNav();
    },

    _showProgressDialog: function(title) {
        this.refs.progressDialog._show(title);
    },

    _dismissProgressDialog: function() {
        this.refs.progressDialog._dismiss();
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
                <CountryList
                    ref="countryList"
                    showProgressDialog={this._showProgressDialog}/>
                <PlayerList
                    dismissProgressDialog={this._dismissProgressDialog}/>
                <ProgressDialog ref="progressDialog"/>
            </div>
        )
    }
});

module.exports = App;