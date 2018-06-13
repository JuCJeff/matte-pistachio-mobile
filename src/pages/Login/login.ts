import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import { ProfilePage } from '../Profile/profile';
import { AuthService } from "../../auth.service";
// import { User } from '../../Models/user';
// import { TabsPage } from '../Tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

@Injectable ()

export class LoginPage {

    public username: string;
    public password: string;

    constructor(public navCtrl: NavController, public authService: AuthService) {

    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }

    navigateToProfile() {
        this.navCtrl.push(ProfilePage);
    }

    login() {

        let callback = (err) => {
            if(err) {
                console.log("Cannot log in");
                return;
            }

            this.navCtrl.push(ProfilePage);
        }

        this.authService.login(this.username, this.password, callback);
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