import { Item } from './../../models/item.model';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListServicevice } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private service: ShoppingListServicevice) {
    this.shoppingList$ =  this.service
      .getShoppingList()
      .snapshotChanges()
      .map(
        changes =>{
          return changes.map(c =>({
            key: c.payload.key, ...c.payload.val()
          }));
      });
  }
}
