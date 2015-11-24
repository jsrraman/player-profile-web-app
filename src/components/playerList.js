"use strict";

let React = require("react");
let List = require('material-ui/lib/lists/list');
let ListItem = require('material-ui/lib/lists/list-item');
let PlayerProfileStore = require("../stores/playerProfileStore");
import * as Events from "../constants/appEvents";

let PlayerList = React.createClass({
    getInitialState: function () {
        return {
            players: []
        };
    },

    componentWillMount: function () {
        PlayerProfileStore.addEventListener(Events.GET_PLAYERS_FOR_COUNTRY_API_COMPLETED_EVENT,
            this._onGetPlayersForCountryApiCompletedEvent)
    },

    componentWillUnmount: function () {
        PlayerProfileStore.removeEventListener(this._onGetPlayersForCountryApiCompletedEvent)
    },

    _onGetPlayersForCountryApiCompletedEvent: function () {
        this.props.dismissProgressDialog();

        this.state.players.length = 0;

        let players = PlayerProfileStore.getPlayers();

        players.forEach((element, index, array) => {
            let imgStyle = {
                verticalAlign: "middle"
            };

            this.state.players.push(
                <ListItem key={element.playerId}>
                    <img src={element.playerUrl} height="24" width="24" style={imgStyle}/>
                    &nbsp;{element.name}
                </ListItem>
            )
        });

        this.setState({players: this.state.players});
    },


    render: function () {
        let listStyle = {
            maxHeight: 800,
            overflowY: "auto"
        };

        return (
            <div>
                <List style={listStyle}>
                    {this.state.players}
                </List>
            </div>
        )
    }
});

module.exports = PlayerList;