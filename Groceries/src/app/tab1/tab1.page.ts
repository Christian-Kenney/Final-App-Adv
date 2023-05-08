import { Component, OnInit } from '@angular/core';
import { GroceriesServiceProvider } from 'src/providers/groceries-service/groceries-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  categories: any[] | undefined;
  newItemName: string | undefined;
  newCategory: string | undefined;

  constructor(private groceryService: GroceriesServiceProvider) {}

  ngOnInit() {
    this.categories = this.groceryService.getCategories();
  }

  toggleItems(category: { showItems: boolean; }) {
    category.showItems = !category.showItems;
  }

  addItem(category: { items: { name: string; }[]; }) {
    if (this.newItemName) {
      category.items.push({name: this.newItemName});
      this.newItemName = '';
    }
  }

  deleteItem(category: { items: any[]; }, item: any) {
    const index = category.items.indexOf(item);
    if (index > -1) {
      category.items.splice(index, 1);
    }
  }

  deleteCategory(category: any) {
    this.groceryService.deleteCategory(category);
  }

  addCategory(categoryName: any) {
    this.groceryService.addCategory(categoryName);
    this.newCategory = "";
  }
}
