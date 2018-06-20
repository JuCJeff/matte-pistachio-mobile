import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LottieAnimationViewModule } from 'ng-lottie';

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
  lottieConfig: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public http: Http,
    private storage: Storage,
  ) {
    //Lottie files
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      path: 'assets/json/checked_done_.json',
      autoplay: true,
      loopt: true
    }
  }


  // added alert message after registering
  navigateToLogin() {
    if (this.confirmpassword != this.password) {
      alert('the passwords do not match');
    }
    else {
      this.register(this.storage);

      //Added alerts
      const alert = this.alertCtrl.create({
        title: 'Registration Successful!',
        subTitle: 'Please login to start helping the world!',
        buttons: ['OK']
        
      });
      alert.present();
      this.navCtrl.push(LoginPage);
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
          this.navigateToLogin();
        },
        error => {
          console.log(error);
        }
      );
  }
}