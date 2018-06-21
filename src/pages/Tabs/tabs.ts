import { Component } from '@angular/core';
import { NavParams, NavController, App } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile';
import { CharityListPage } from '../CharityList/charityList';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../Login/login';
import { PaymentPage } from '../Payment/payment';
import { AuthService } from "../../auth.service";

@Component({
  selector: 'page-registration',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  profilePage = ProfilePage;
  charityListPage = CharityListPage;
  personalCharityPage = PersonalCharityPage;
  menuPage = MenuPage;

  loginData: any = null;

  constructor(public navParams: NavParams, public navCtrl: NavController) {
      this.loginData = this.navParams.data;
  }
  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }

}