import React, {Component} from 'react';
import Order from './Order';

class OrderList extends Component{
    render(){
        return(
            <div className="list">
                {this.props.orders.map((item, i) => (
                    <Order key={i} index={i} orders={item} deleteOrder={this.props.deleteOrder} isEdit={this.props.isEdit} />
                ))
                }
            </div>
        )
    }

}

export default OrderList;


