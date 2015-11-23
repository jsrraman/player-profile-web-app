"use strict";

let React = require("react");
let LeftNav = require("material-ui/lib/left-nav");
let List = require('material-ui/lib/lists/list');
let ListItem = require('material-ui/lib/lists/list-item');
let PlayerStore = require("../stores/playerStore");

let CountryList = React.createClass({
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
        let players = PlayerStore.getCountries();

        players.forEach((element, index, array) => {
            let imgStyle = {
                verticalAlign: "middle"
            };

            this.state.countryList.push(
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
        let listStyle = {
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