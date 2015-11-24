"use strict";

let React = require("react");
let LeftNav = require("material-ui/lib/left-nav");
let List = require('material-ui/lib/lists/list');
let ListItem = require('material-ui/lib/lists/list-item');
let PlayerProfileStore = require("../stores/playerProfileStore");

let CountryList = React.createClass({
    getInitialState: function () {
        return {
            countries: []
        };
    },

    componentWillMount: function () {
        PlayerProfileStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function () {
        PlayerProfileStore.removeChangeListener(this._onChange)
    },

    _onChange: function () {
        let countries = PlayerProfileStore.getCountries();

        countries.forEach((element, index, array) => {
            let imgStyle = {
                verticalAlign: "middle"
            };

            this.state.countries.push(
                <ListItem key={element.countryId} onTouchTap={this._handleListItemClick.bind(this, element.countryId)}>
                    <img src={element.thumbnailUrl} height="24" width="24" style={imgStyle}/>
                    &nbsp;{element.name}
                </ListItem>
            )
        });

        this.setState({countries: this.state.countries});
    },

    _toggleNav: function () {
        this.refs.leftNav.toggle();
    },

    _handleListItemClick: function(countryId) {
        //console.log("Country ID->" + countryId);
    },

    render: function () {
        let listStyle = {
            maxHeight: 800,
            overflowY: "auto"
        };

        return (
            <div>
                <LeftNav ref="leftNav" docked={false}>
                    <List style={listStyle}>
                        {this.state.countries}
                    </List>
                </LeftNav>
            </div>
        )
    }
});

module.exports = CountryList;