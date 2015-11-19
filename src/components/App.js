"use strict";

var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var FlatButton = require('material-ui/lib/flat-button');
var LeftNav = require('material-ui/lib/left-nav');

var App = React.createClass({
    getInitialState: function () {
        return {
            menuItems: [
                {route: 'get-started', text: 'Get Started'},
                {route: 'customization', text: 'Customization'},
                {route: 'components', text: 'Components'}
            ]
        };
    },

    _toggleNav: function () {
        this.refs.leftNav.toggle();
    },

    render: function () {
        return (
            <div>
                <AppBar
                    title="Player Profile"
                    onLeftIconButtonTouchTap={this._toggleNav}/>

                <LeftNav
                    ref="leftNav"
                    docked={false}
                    menuItems={this.state.menuItems}/>
            </div>
        )
    }
});

module.exports = App;