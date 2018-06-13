import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../Payment/payment';
import { LoginPage } from '../Login/login';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public password: string;
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");

    this.token = localStorage.getItem("TOKEN");//this.navParams.get("token");
    console.log("profile name", this.token);
  }

  navigateToPersonalCharity() {
    this.navCtrl.push(PersonalCharityPage);
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }

  navigateToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}