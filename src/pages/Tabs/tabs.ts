import { Component } from '@angular/core';
import { NavParams, NavController, App } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile';
import { CharityListPage } from '../CharityList/charityList';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../Login/login';
import { PaymentPage } from '../Payment/payment';
import { AuthService } from "../../auth.service";
import { SettingsPage } from '../settings/settings';
import { EditProfilePage } from '../editprofile/editprofile';

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

  constructor(public navParams: NavParams, public navCtrl: NavController, public authService: AuthService, private app: App) {
      this.loginData = this.navParams.data;
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }
  navigateToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  navigateToLogin() {
    this.authService.logout();
    this.app.getRootNav().setRoot(LoginPage)
  }

  navigateToEdit() {
    this.navCtrl.push(EditProfilePage);
  }
}