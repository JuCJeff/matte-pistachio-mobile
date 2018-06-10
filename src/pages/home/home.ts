import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../Registration/registration';
import { LoginPage } from '../Login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      title: "Welcome to Charity Hero",
      description: "There are many ways to support charities around the world, we hope we could offer you the easiest and best platform to support your beloved programs.",
      image: "assets/imgs/Home1.jpg",
    },
    {
      title: "What is Charity Hero?",
      description: "Charity Hero is a platform that you can keep a list of charities to your <b>monthly donations</b> and also send <b>one time donation</b> to thousands of <b>certified charities</b> in our database.",
      image: "assets/imgs/Home2.jpg",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
