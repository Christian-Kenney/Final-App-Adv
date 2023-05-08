import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceProvider {

  categories: any[] = [
    {
      name: 'One Pot Mac & Cheese',
      showItems: false,
      items: [
        {name: '3-1/2 Whole Milk'},
        {name: '1 Package Elbow Macaroni'},
        {name: '4 ounces Velveeta'},
        {name: '2 cups cheddar cheese'}
      ]
    },
    {
      name: 'Chicken with Rosemary Butter Sauce',
      showItems: false,
      items: [
        {name: '4 Chicken Breasts'},
        {name: '4 tablesppons Butter'},
        {name: '1/2 cup White Wine'},
        {name: '1/2 cup heavy whipping cream'},
        {name: 'Rosemary'}
      ]
    },
    {
      name: 'Nutty Cheese Tortellini',
      showItems: false,
      items: [
        {name: '1 Package Tortellini'},
        {name: '1/2 cup butter'},
        {name: '1/3 cup chopped walnuts'},
        {name: '1/4 cup shredded Parmesan Cheese'},
        {name: 'Parsley'}
      ]
    },
    {
      name: 'Sausage Hash',
      showItems: false,
      items: [
        {name: '1 pound pork sausage'},
        {name: '1 medium onion'},
        {name: '2 medium carrots'},
        {name: '1 medium green pepper'},
        {name: '3 cups diced cooked potatoes'}
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }

  addCategory(categoryName: any) {
    this.categories.push({name: categoryName, showItems: false, items: []});
  }

  addItem(categoryIndex: number, itemName: string) {
    this.categories[categoryIndex].items.push({name: itemName});
  }

  deleteCategory(category: any) {
    const index = this.categories.indexOf(category);
    if (index > -1) {
      this.categories.splice(index);
    }
  }

  deleteItem(category: any, item: any) {
    const index = category.items.indexOf(item);
    if (index > -1) {
      category.items.splice(index, 1);
    }
  }

}
