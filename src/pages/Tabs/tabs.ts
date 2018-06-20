import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile';
import { CharityListPage } from '../CharityList/charityList';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';

@Component({
  selector: 'page-registration',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  nav: any;
  profilePage = ProfilePage;
  charityListPage = CharityListPage;
  personalCharityPage = PersonalCharityPage;
  
  loginData: any = null;

  constructor(public navParams: NavParams) {
      this.loginData = this.navParams.data;
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