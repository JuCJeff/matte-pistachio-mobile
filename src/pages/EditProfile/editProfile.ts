import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../auth.service";
import { Http } from '@angular/http';
import { decode } from 'jsonwebtoken';
import { TabsPage } from '../Tabs/tabs';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editProfile',
  templateUrl: 'editProfile.html',
})
export class EditProfilePage {

  token: string;
  user_id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthService) {
    this.token = localStorage.getItem("TOKEN");
    var details = decode(this.token);
    this.user_id = (details as any).user.id;
    this.username = (details as any).user.username;
    this.firstname = (details as any).user.firstname;
    this.lastname = (details as any).user.lastname;
    this.email = (details as any).user.email;
    this.phonenumber = (details as any).user.phonenumber;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  editProfile() {

    this.http.put(this.authService.getBaseUrl() + "/user/editProfile", {
      user: {
        id: this.user_id,
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phonenumber: this.phonenumber,
      },
    })

      .subscribe(
        result => {
          this.navCtrl.setRoot(TabsPage);
        });
  }
}
    


