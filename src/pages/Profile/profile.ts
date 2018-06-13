import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../Payment/payment';



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

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }

}