import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../Login/login';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

}