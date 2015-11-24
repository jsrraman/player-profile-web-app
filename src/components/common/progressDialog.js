"use strict";

import React from "React";
import Dialog from "material-ui/lib/dialog";
import CircularProgress from "material-ui/lib/circular-progress";

const ProgressDialog = React.createClass({
    getInitialState: function () {
        return {
            title: "Loading ...",
            showProgressDialog: false
        };
    },

    _show: function(title) {
      this.setState({
          title: title,
          showProgressDialog: true});
    },

    _dismiss: function() {
        this.setState({showProgressDialog: false})
    },

    render: function () {
        return (
            <div>
                <Dialog
                    title={this.state.title}
                    open={this.state.showProgressDialog}>
                    <CircularProgress mode="indeterminate"/>
                </Dialog>
            </div>
        )
    }
});

export default ProgressDialog;