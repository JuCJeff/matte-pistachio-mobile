import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../Login/login';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  navigateToLogin() {

    //Added alerts
    const alert = this.alertCtrl.create({
      title: 'You are in!',
      subTitle: 'Welcome to the charity hero family! Please login to start helping the world!',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.push(LoginPage);
  }

}