import { Injectable } from '@angular/core';

@Injectable()
export class GroceriesServiceProvider {

    items = [
    {
      name: "Milk",
    quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Eggs",
      quantity: 12
    }
  ];

    constructor() {
        console.log('Hello World');
    }

    getItems() {
        return this.items;
    }

    removeItem(index: any) {
        this.items.splice(index, 1);
    }

    addItem(item: any){
        this.items.push(item);
    }

    editItem(item: any, index: any) {
        this.items[index] = item;
    }
}