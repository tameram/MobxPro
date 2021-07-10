import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Market from './components/Market';
import { observer ,inject } from 'mobx-react';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    // console.log(this.props.store);
    return (
      <div className="App">
        <Market store={this.props.MyInventory}></Market>
      </div>
    );
  }
}
export default inject("MyInventory")(observer(App));
