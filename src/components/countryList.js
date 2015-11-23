"use strict";

var React = require("react");
var LeftNav = require("material-ui/lib/left-nav");
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var PlayerStore = require("../stores/playerStore");

var CountryList = React.createClass({
    getInitialState: function () {
        return {
            countryList: []
        };
    },

    componentWillMount: function () {
        PlayerStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function () {
        PlayerStore.removeChangeListener(this._onChange)
    },

    _onChange: function () {
        var players = PlayerStore.getCountries();
        var self = this;

        players.forEach(function (element, index, array) {
            var imgStyle = {
                verticalAlign: "middle"
            };

            self.state.countryList.push(
                <ListItem key={index}>
                    <img src={element.thumbnailUrl} height="24" width="24" style={imgStyle}/>
                    &nbsp;{element.name}
                </ListItem>
            )
        });

        this.setState({countryList: this.state.countryList});
    },

    _toggleNav: function () {
        this.refs.leftNav.toggle();
    },

    render: function () {
        var listStyle = {
            maxHeight: 800,
            overflowY: "auto"
        };

        return (
            <div>
                <LeftNav ref="leftNav" docked={false}>
                    <List style={listStyle}>
                        {this.state.countryList}
                    </List>
                </LeftNav>
            </div>
        )
    }
});

module.exports = CountryList;