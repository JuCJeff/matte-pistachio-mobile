import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { TabsPage } from '../Tabs/tabs';
import { PaymentPage } from '../Payment/payment';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
    private rootPage;
    private settingsPage;
    private paymentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = TabsPage;
    this.settingsPage = SettingsPage;
    this.paymentPage = PaymentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(p) {
    this.rootPage = p;
  }
}
