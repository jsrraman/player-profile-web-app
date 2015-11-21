"use strict";

var React = require("react");
var LeftNav = require("material-ui/lib/left-nav");
var PlayerStore = require("../stores/playerStore");

var PlayerList = React.createClass({
    //getInitialState: function () {
    //    return {
    //        menuItems: [
    //            {route: "get-started", text: "Get Started"},
    //            {route: "customization", text: "Customization"},
    //            {route: "components", text: "Components"}
    //        ]
    //    };
    //},
    getInitialState: function () {
        return {
            menuItems: []
        };
    },

    componentWillMount: function () {
        PlayerStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function () {
        PlayerStore.removeChangeListener(this._onChange)
    },

    _onChange: function () {
        var players = PlayerStore.getAllPlayerCountries();
        var self = this;

        players.forEach(function(element, index, array) {
            var menuItem = {};

            menuItem.route = "" + index;
            menuItem.text = element.name;

            self.state.menuItems.push(menuItem);
        });

        this.setState({menuItems: this.state.menuItems});
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