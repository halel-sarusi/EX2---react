import '../App.css';
import React, { Component } from 'react';
import Form from './Form';
import OrderList from './OrderList';
import Orders from '../Data/Orders.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      isEditing: false,
      currOrder: {
        id: '',
        date: '',
        name: '',
        city: '',
      },
    }
    this.deleteOrder = this.deleteOrder.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.isEdit = this.isEdit.bind(this);
  }

  componentDidMount() {
    Orders.map(item => this.addOrder({
      id: item.id,
      name: item.name,
      city: item.city,
      date: item.date,
    }));
  }

  editOrder(newOrder) {
    this.setState(prevState => ({
      isEditing: false,
      orders: prevState.orders.map(
        order => order.id !== newOrder.id ? order : newOrder
      )
    }));
  }

  deleteOrder(id) {
    this.setState(prevState => ({
      orders: prevState.orders.filter(order => order.id !== id)
    }));
  }

  addOrder(newOrder) {
    this.setState(prevState => ({
      orders: [
        ...prevState.orders, {
          id: newOrder.id !== null ? newOrder.id : this.nextId(prevState.orders),
          name: newOrder.name,
          city: newOrder.city,
          date: newOrder.date,
        }]
    }))
  }

  nextId(orders = []) {
    let max = orders.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
    return ++max;
  }

  isEdit(order) {
    this.setState({
      isEditing: true,
      currOrder: order,
    })
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="main">
            <OrderList isEdit={this.isEdit} orders={this.state.orders} deleteOrder={this.deleteOrder}></OrderList>
            <Form editOrder={this.editOrder} isEditing={this.state.isEditing} addOrder={this.addOrder} currOrder={this.state.currOrder}></Form>
          </div>
        </div>
        <div className="mobel"></div>
      </div>
    );
  }
}

export default App;
