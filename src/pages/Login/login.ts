import { Component, Injectable } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from "../../auth.service";
import { Http } from '@angular/http';
import { TabsPage } from '../Tabs/tabs';
import { LottieAnimationViewModule } from 'ng-lottie';
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

    constructor(public navCtrl: NavController, public authService: AuthService, public http: Http, public toastCtrl: ToastController) {
        LottieAnimationViewModule.forRoot();
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }

    //Show toast
    showToast1(position: string) {
        let toast = this.toastCtrl.create({
            message: 'Username and password do not match. Please try again.',
            duration: 4000,
            position: position
        });

        toast.present(toast);
    }

    login() {

        let callback = (err) => {
            if (err) {
                console.log("Cannot log in");
                console.log(this.showToast1('top'));
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