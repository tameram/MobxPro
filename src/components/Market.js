import React, { Component } from "react";
import { observer ,inject} from 'mobx-react';
import Item from "./Item";

class Market extends Component {
    constructor(){
        super()
        this.state ={
            newItem :''
        }
    }

    handleChange = (e) => {
        this.setState({
          newItem: e.target.value
        })
      }
    addItem =()=>{
        this.props.store.addItem(this.state.newItem)
    }

    
    render() {
      return (
        <div>
            <input value={this.state.newItem} onChange = {this.handleChange} ></input>
            <button onClick ={this.addItem}>Add</button>
            <h4>number of items {this.props.store.numberOfItems}</h4>
            {this.props.store.items.map(i => <Item store = {this.props.store} item={i}></Item>)}

        </div>
      );
    }
}

export default observer(Market)