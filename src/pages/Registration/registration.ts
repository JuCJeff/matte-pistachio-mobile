import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ToastController } from 'ionic-angular';
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
    public toastCtrl: ToastController
  ) {
    //Lottie files
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      path: 'assets/json/checked_done_.json',
      autoplay: true,
      loopt: true
    }

  }

  //Show toast
  showToast1(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Confirm password and password needs to match.',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showToast2(position: string) {
    let toast = this.toastCtrl.create({
      message: 'The username already exists in the database. Please try another username.',
      duration: 4000,
      position: position
    });

    toast.present(toast);
  }

  //Registration function
  register(storage: Storage) {

    //Check if passwords match first before posting
    if (this.confirmpassword != this.password) {
      this.showToast1('top');
    } 
    else {
      this.http
        .post("https://localhost:3000/registration", {
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
            //Added alerts
            const alert = this.alertCtrl.create({
              title: 'Registration Successful!',
              subTitle: 'Please login to start helping the world!',
              buttons: ['OK']
            });
            alert.present();
            //Navigate to login page
            this.navCtrl.push(LoginPage);
          },
          error => {
            console.log(this.showToast2('top'));
          }
        );
    }
  }
}