import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { User } from '../../Models/user';
// import { TabsPage } from '../Tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {

    public username: string;
    public password: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    //   navigateToProfile() {
    //     this.navCtrl.push(ProfilePage);
    // }

    //   login() {
    //     var user = new User();
    //     user.id = 9073935828;
    //     user.email = "zma67@wisc.edu";
    //     user.firstname = "Jeff";
    //     user.lastname = "Ma";

    //     this.navCtrl.push(TabsPage, {
    //       user: user,
    //       username: this.username,
    //       password: this.password
    //     });

    //   }

}