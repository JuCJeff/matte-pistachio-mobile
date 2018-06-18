import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
  phonenumber: string;
  jwt: string;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public http: Http,
    private storage: Storage,
  ) {

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

  matchPassword() {
    if (this.confirmpassword != this.password) {
      alert('the passwords do not match');
    }
    else {
      this.register(this.storage);
      this.navigateToLogin();
    }
  }

  register(storage: Storage) {
    this.http
      .post("http://localhost:3000/registration", {
        username: this.username,
        password: this.password,
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        phonenumber: this.phonenumber
      })
      .subscribe(
        result => {
          let token = result.json().token;
          this.storage.set('jwt', token);
          this.storage.set('jwtFull', result);
          this.matchPassword();
        },
        error => {
          console.log(error);
        }
      );
  }
}