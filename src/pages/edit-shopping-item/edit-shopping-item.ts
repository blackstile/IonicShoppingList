import { ToastService } from './../../services/toast/toast.service';
import { ShoppingListServicevice } from './../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {     Item } from '../../models/item.model'

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: ShoppingListServicevice,
    private toast: ToastService) {
  }

  ionViewWillLoad(){
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  saveItem(item: Item){
    this.service.saveItem(item).then(() => {
      this.toast.show(`${item.name} saved!`)
      this.navCtrl.setRoot('HomePage')
    });
  }

  removeItem(item:Item){
    this.service.removeItem(item).then(()=>{
      this.toast.show(`${item.name} removed!`)
      this.navCtrl.setRoot('HomePage');
    })
  }

}
