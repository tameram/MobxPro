import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Inventory } from './store/Inventory'
import { Item } from './store/Item';
import { Provider } from 'mobx-react'

const item1 = new Item("Pizza")
const item2 = new Item("burgar")
const MyInventory = new Inventory()
MyInventory.items.push(item1)
MyInventory.items.push(item2)
const store = { MyInventory }
// console.log(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider {... store}>
      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
