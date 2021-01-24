import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            date: '',
            name: '',
            city: '',
        }
        this.renderEdit = this.renderEdit.bind(this);
        this.renderAdd = this.renderAdd.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currOrder !== prevProps.currOrder) {
            this.setState({
                id: this.props.currOrder.id,
                name: this.props.currOrder.name,
                date: this.props.currOrder.date,
                city: this.props.currOrder.city,
            });
        }
    }

    renderAdd() {
        return (
            <form className="form">
                <input type="text" value={this.state.date} name="date" placeholder="date" onChange={this.onChange}></input>
                <input type="text" value={this.state.name} name="name" placeholder="name" onChange={this.onChange}></input>
                <input type="text" value={this.state.city} name="city" placeholder="city" onChange={this.onChange}></input>
                <button onClick={this.saveUser}>Save</button>
            </form>

        );
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    saveUser(e) {
        e.preventDefault();
        let newOrder = {
            id: this.state.id,
            date: this.state.date,
            name: this.state.name,
            city: this.state.city,
        }
        this.setState({
            id: null,
            date: '',
            name: '',
            city: '',
        })
        this.props.isEditing ? this.props.editOrder(newOrder) : this.props.addOrder(newOrder);
    }

    renderEdit() {
        return (
            <form className="form">
                <input type="text" value={this.state.date} name="date" placeholder="date" onChange={this.onChange}></input>
                <input type="text" value={this.state.name} name="name" placeholder="name" onChange={this.onChange}></input>
                <input type="text" value={this.state.city} name="city" placeholder="city" onChange={this.onChange}></input>
                <button onClick={this.saveUser}>Update</button>
            </form>
        );
    }

    render() {
        return (
            this.props.isEditing ? this.renderEdit() : this.renderAdd()
        );
    }

}

export default Form;
