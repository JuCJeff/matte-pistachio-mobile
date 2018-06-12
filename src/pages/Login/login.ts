import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import { ProfilePage } from '../Profile/profile';
// import { User } from '../../Models/user';
// import { TabsPage } from '../Tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {

    public username: string;
    public password: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }

    navigateToProfile() {
        this.navCtrl.push(ProfilePage);
    }

    login() {
        this.http
            .post("http://localhost:3000/login", {
                username: this.username,
                password: this.password
            })
            .subscribe(
                result => {
                    console.log(result);

                    // Our username and password (on this) should have data from the user
                    this.navCtrl.push(ProfilePage, {
                        username: this.username,
                        password: this.password
                    });
                },

                error => {
                    console.log(error);
                }
            );
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