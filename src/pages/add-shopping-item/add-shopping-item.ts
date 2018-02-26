import { ShoppingListServicevice } from './../../services/shopping-list/shopping-list.service';
import { Item } from './../../models/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: ShoppingListServicevice ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
     this.service.addItem(item).then(ref=>{
       console.log(ref.key);
       this.navCtrl.setRoot('HomePage', {key: ref.key});
     })
  }

}
