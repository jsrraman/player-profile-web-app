"use strict";

var React = require("react");
var AppBar = require("material-ui/lib/app-bar");
var PlayerList = require("./playerList");

var App = React.createClass({
    //getInitialState: function () {
    //    return {
    //        menuItems: [
    //            {route: 'get-started', text: 'Get Started'},
    //            {route: 'customization', text: 'Customization'},
    //            {route: 'components', text: 'Components'}
    //        ]
    //    };
    //},

    _togglePlayerList: function () {
        this.refs.playerList._toggleNav();
    },

    render: function () {
        var styles = {
            textAlign: "center"
        };

        return (
            <div>
                <AppBar
                    title="Player Profile"
                    style={styles}
                    onLeftIconButtonTouchTap={this._togglePlayerList}/>

                <PlayerList ref="playerList"/>
            </div>
        )
    }
});

module.exports = App;