import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile';
import { CharityListPage } from '../CharityList/charityList';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';
import { PaymentPage } from '../Payment/payment';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-registration',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  rootPage: any;
  profilePage = ProfilePage;
  charityListPage = CharityListPage;
  personalCharityPage = PersonalCharityPage;
  settingsPage = SettingsPage;
  paymentPage = PaymentPage;

  loginData: any = null;

  constructor(public navParams: NavParams, public navCtrl: NavController) {
      this.loginData = this.navParams.data;
  }

  navigateToDonations() {
    this.navCtrl.push(PaymentPage);
  }
  
  navigateToSettings() {
    this.navCtrl.push(SettingsPage);
  }

}