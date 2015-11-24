"use strict";

const React = require("react");
const LeftNav = require("material-ui/lib/left-nav");
const List = require('material-ui/lib/lists/list');
const ListItem = require('material-ui/lib/lists/list-item');
const PlayerProfileStore = require("../stores/playerProfileStore");
import * as Events from "../constants/appEvents";
import PlayerProfileApiActions from "../actions/playerProfileApiActions";

let CountryList = React.createClass({
    getInitialState: function () {
        return {
            countries: []
        };
    },

    componentWillMount: function () {
        PlayerProfileStore.addEventListener(Events.GET_COUNTRIES_API_COMPLETED_EVENT,
            this._onGetCountriesApiCompletedEvent)
    },

    componentWillUnmount: function () {
        PlayerProfileStore.removeEventListener(this._onGetCountriesApiCompletedEvent)
    },

    _onGetCountriesApiCompletedEvent: function () {
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

    _handleListItemClick: function (countryId) {
        PlayerProfileApiActions.getPlayersForCountry(countryId);
        this._toggleNav();
        this.props.showProgressDialog("Getting players' list ...");
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