import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'

export class Inventory {

    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice : action,
            numberOfItems : computed
        })
    }

    addItem = (name) => {
        let item = this.items.find(i => i.name === name)
        if (item === undefined) {
            const newItem = new Item(name)
            this.items.push(newItem)
        } else {
            item.quantity += 1
        }
    }

    buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        if (item.quantity == 0) {
            this.items = this.items.filter(i => i.name != name)
        }
        else {
            item.quantity -= 1
        }
    }
    changePrice = (name , price) => {
       
        let item = this.items.find(i => i.name == name) 
        console.log(item );
        if (item != undefined) {
            item.price = price
        }
    }

    get numberOfItems(){
        return this.items.length
    }
}