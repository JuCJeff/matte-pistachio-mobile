import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AuthService } from '../../auth.service';
import { decode } from 'jsonwebtoken';
import { TabsPage } from '../Tabs/tabs';
import { ProfilePage } from '../Profile/profile';
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  token: string;
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  phonenumber: string;
  password: string;
  newpassword: string;
  changedpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthService) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.user_id = (details as any).user.id;
    this.firstname = (details as any).user.firstname;
    this.lastname = (details as any).user.lastname;
    this.email = (details as any).user.email;
    this.username = (details as any).user.username;
    this.phonenumber = (details as any).user.phonenumber;
    this.password = "";
    this.newpassword = "";
    this.changedpassword = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  editProfile() {
    if (this.newpassword == this.changedpassword) {
      this.http
        .put(this.authService.getBaseUrl() + "/user/settings", {
          user: {
            id: this.user_id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            username: this.username,
            phonenumber: this.phonenumber,
            password: this.password,
          },
          newpassword: this.newpassword,
        })
        .subscribe(
          result => {
            var UserToken = result.json();
            localStorage.clear();
            localStorage.setItem("TOKEN", UserToken.token);
            this.navCtrl.setRoot(TabsPage);
          },
          error => {
            alert("incorrect password input");
            console.log(error);
          }
       );
    }
    else {
      alert("new passwords dont match")
    }
  }
  navigateToProfile() {
    this.navCtrl.push(HomePage)
  }
}

