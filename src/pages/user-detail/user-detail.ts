import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
  user: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.user = navParams.get('item') || items.defaultItem;
  }

}
