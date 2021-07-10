import React, { Component } from "react";
import { observer ,inject} from 'mobx-react';

class Item extends Component {

    changePrice = () =>{
        const newPrice=prompt('enter your new price')
        this.props.store.changePrice(this.props.item.name,parseInt(newPrice))
    }

    buyItem =() =>{
        this.props.store.buyItem(this.props.item.name)
    }
    render() {
     console.log(this.props);
      return (
        <li>
            <h5>{this.props.item.quantity} {this.props.item.name} available at {this.props.item.price}$ per item</h5>
            <button onClick={this.buyItem}>buy</button>
            <button onClick={this.changePrice}>Change Price</button>
        </li>
      );
    }
}

export default observer(Item)