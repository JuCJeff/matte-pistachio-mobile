import { Component, ApplicationRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../Models/charity';
import { CharityProfilePage } from '../CharityProfile/charityProfile';
import { Http } from '@angular/http';
import { AuthService } from "../../auth.service";

@IonicPage()
@Component({
  selector: 'page-charityList',
  templateUrl: 'charityList.html',
})
export class CharityListPage {

  //For item lists
  public charities: Array<any> = [];
  public charitylist: Array<any> = [];
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthService, private appRef: ApplicationRef) {
  }

  ionViewWillEnter() {
    this.token = localStorage.getItem("TOKEN");
    this.authService.getMe((err) => {
      console.log('ionViewWillEnter CharityListPage');
      this.http.get(`https://matte-pistachio-api.herokuapp.com/charity?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.charities = response;
        }
      ));
      console.log(this.charities);
      this.http.get(`https://matte-pistachio-api.herokuapp.com/charity?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.charitylist = response;
        }
      ));
    });

  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.charities = this.charitylist;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.charities = this.charities.filter((charity) => {
        return (charity.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}
