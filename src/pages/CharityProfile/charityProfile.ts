import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../Models/charity'

@Component({
  selector: 'page-charityprofile',
  templateUrl: 'charityprofile.html'
})
export class CharityProfilePage {

    public charity: Charity;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

}