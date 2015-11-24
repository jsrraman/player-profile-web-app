"use strict";

let React = require("react");
let List = require('material-ui/lib/lists/list');
let ListItem = require('material-ui/lib/lists/list-item');
let PlayerProfileStore = require("../stores/playerProfileStore");

let PlayerList = React.createClass({
    getInitialState: function () {
        return {
            players: []
        };
    },

    componentWillMount: function () {
        PlayerProfileStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function () {
        PlayerProfileStore.removeChangeListener(this._onChange)
    },

    _onChange: function () {
        let players = PlayerProfileStore.getCountries();

        players.forEach((element, index, array) => {
            let imgStyle = {
                verticalAlign: "middle"
            };

            this.state.players.push(
                <ListItem key={index}>
                    <img src={element.thumbnailUrl} height="24" width="24" style={imgStyle}/>
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