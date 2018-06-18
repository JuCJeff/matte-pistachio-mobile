import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "../../auth.service";
import { Http } from '@angular/http';
import { TabsPage } from '../Tabs/tabs';
// import { User } from '../../Models/user';
// import { TabsPage } from '../Tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

@Injectable()

export class LoginPage {

    public username: string;
    public password: string;

    constructor(public navCtrl: NavController, public authService: AuthService, public http: Http) {

    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }

    login() {

        let callback = (err) => {
            if (err) {
                console.log("Cannot log in");
                return;
            }
            this.navCtrl.push(TabsPage);
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

    //   }

}