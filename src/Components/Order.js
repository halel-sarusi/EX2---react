import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class Order extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }

    delete() {
        this.props.deleteOrder(this.props.orders.id);
    }

    edit() {
        this.props.isEdit(this.props.orders);
    }

    render() {
        return (
            <div className="row">
                <p>{(this.props.index) + 1}</p>
                <p>{this.props.orders.date}</p>
                <p>{this.props.orders.name}</p>
                <p>{this.props.orders.city}</p>
                <div className="fab">
                    <Fab style={{ background: "#ED4D47", color: "#ffffff", width: "36px", height: "36px" }} aria-label="Edit" onClick={this.edit}><EditIcon /></Fab>
                    <Fab style={{ background: "#ED4D47", color: "#ffffff", width: "36px", height: "36px" }} aria-label="Delete" onClick={this.delete}><DeleteOutlineIcon /></Fab>
                </div>
            </div>
        );
    }
}

export default Order;
