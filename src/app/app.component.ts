import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/Profile/profile';
import { CharityListPage } from '../pages/CharityList/charityList';
import { TabsPage } from '../pages/Tabs/tabs';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    switch (page) {
      case "ProfilePage":
        this.nav.push(ProfilePage);
        return;
      case "CharityListPage":
        this.nav.push(CharityListPage);
        return;
    }
  }
}

