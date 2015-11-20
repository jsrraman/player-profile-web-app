"use strict";

var React = require("react");
var LeftNav = require("material-ui/lib/left-nav");

var PlayerList = React.createClass({
    getInitialState: function () {
        return {
            menuItems: [
                {route: "get-started", text: "Get Started"},
                {route: "customization", text: "Customization"},
                {route: "components", text: "Components"}
            ]
        };
    },

    _toggleNav: function () {
        this.refs.leftNav.toggle();
    },

    render: function () {
        return (
            <div>
                <LeftNav
                    ref="leftNav"
                    docked={false}
                    menuItems={this.state.menuItems}/>
            </div>
        )
    }
});

module.exports = PlayerList;