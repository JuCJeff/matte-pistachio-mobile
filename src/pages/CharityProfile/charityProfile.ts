import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../Models/charity'
import { Http } from '@angular/http';
import { PaymentPage } from '../Payment/payment';

@Component({
  selector: 'page-charityProfile',
  templateUrl: 'charityProfile.html'
})
export class CharityProfilePage {

    public charity: Charity;
    public favorited: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
      this.charity = this.navParams.get("charity");
      if (this.charity.favorited == false) {
        this.favorited = false;
      }
      else if (this.charity.favorited == true) {
        this.favorited = true;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');  
  }

  addMyCharities() {
    if (this.favorited == false) {
      this.favorited = true;
      console.log(this.favorited);
      //localStorage.setItem("favorited", 'true');
      this.http.patch("https://matte-pistachio-api.herokuapp.com/mycharity/" + this.charity.id, {}).subscribe((result => {}));
    }
    
    else if (this.favorited == true) {
      this.favorited = false;
      console.log(this.favorited);
      //localStorage.setItem("favorited", 'false');
      this.http.patch("https://matte-pistachio-api.herokuapp.com/notmycharity/" + this.charity.id, {}).subscribe((result => {}));
    }
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage, {
      charityid: this.charity.id,
      charityname: this.charity.name
    });
  }

}