import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RegistrationPage } from '../Registration/registration';
import { LoginPage } from '../Login/login';
//For fetching data from 3rd party APIs
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TabsPage } from '../Tabs/tabs';
import { StripeJavaScriptPage } from '../stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../stripe-native/stripe-native';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  slides = [
    {
      title: "Welcome to Charity Hero",
      description: "There are many ways to support charities around the world, we hope we could offer you the easiest and best platform to support your beloved programs.",
      image: "assets/imgs/Home1.jpg",
    },
    {
      title: "What is Charity Hero?",
      description: "Charity Hero is a platform that you can keep a list of charities to your <b>monthly donations</b> and also send <b>one time donation</b> to thousands of <b>certified charities</b> in our database.",
      image: "assets/imgs/Home2.jpg",
    }
  ];

  //Lottie files
  lottieConfig: any;

  constructor(public navCtrl: NavController, public http: Http, private app: App) {

    //Lottie files
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      path: 'assets/json/like.json',
      autoplay: true,
      loopt: true
    }

    if (localStorage.getItem("TOKEN")) {
      this.app.getRootNav().setRoot(TabsPage);
    }
  }

  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  navigateToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  openJavaScript() {
    this.navCtrl.push(StripeJavaScriptPage);
  }

  openNative() {
    this.navCtrl.push(StripeNativePage);
  }

}
