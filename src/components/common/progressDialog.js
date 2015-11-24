"use strict";

import React from "React";
import Dialog from "material-ui/lib/dialog";
import CircularProgress from "material-ui/lib/circular-progress";

const ProgressDialog = React.createClass({
    getInitialState: function () {
        return {
            message: "Loading ...",
            showProgressDialog: false
        };
    },

    _show: function (message) {
        this.setState({
            message: message,
            showProgressDialog: true
        });
    },

    _dismiss: function () {
        this.setState({showProgressDialog: false})
    },

    render: function () {
        let verticalAlignStyle = {
            verticalAlign: "middle"
        };

        let circularProgressStyle = {
            verticalAlign: "middle",
            marginRight: "2em"
        };

        return (
            <Dialog
                modal={true}
                open={this.state.showProgressDialog}>
                <div style={verticalAlignStyle}>
                    <CircularProgress mode="indeterminate" style={circularProgressStyle}/>
                    {this.state.message}
                </div>
            </Dialog>
        )
    }
});

export default ProgressDialog;