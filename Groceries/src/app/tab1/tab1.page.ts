import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceProvider } from 'src/providers/groceries-service/groceries-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {}

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item: any, index: any) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + ' ...',
      duration: 3000
    });
    toast.present();
    
    this.dataService.removeItem(index);
  }

  
  addItem(){
    console.log("add item")
    this.showAddItemPrompt();
  }

  async editItem(item: any, index: any){
    console.log("edit item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    (await toast).present();
    this.showEditItemPrompt(item, index);
  }
  async showAddItemPrompt(){
    const prompt = this.alertCtrl.create({
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item)
            this.dataService.addItem(item);
          }
        }
      ]
      
    });
    (await (prompt)).present();
  }

  async showEditItemPrompt(item: any, index: any) {
    const prompt = this.alertCtrl.create({
      message: "Please edit item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.dataService.editItem(item, index)
          }
        }
      ]
    });
    (await (prompt)).present();
  }
}
