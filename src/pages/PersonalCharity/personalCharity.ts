import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../Models/charity';
import { CharityProfilePage } from '../CharityProfile/charityProfile';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-personalCharity',
  templateUrl: 'personalCharity.html',
})

export class PersonalCharityPage {

  //For item lists
  public mycharities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    //Charities instances
    /*
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "ACCESS College Foundation";
    charity1.mission = "ACCESS College Foundation was founded in 1988 to eliminate barriers to postsecondary education and increase college attainment for underrepresented and low-income students.";
    charity1.img = "assets/imgs/Charity1.jpg";
    charity1.url = "https://www.accesscollege.org/";
    charity1.bank = "Chase";
    charity1.accountnumber = "1234567890123456";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Animal Equality";
    charity2.mission = "Animal Equality is an international organization working with society, governments and companies to end cruelty to farmed animals.";
    charity2.img = "assets/imgs/Charity2.jpg";
    charity2.url = "https://www.animalequality.net/";
    charity2.bank = "Chase";
    charity2.accountnumber = "09876543210988765";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "AIDS United";
    charity3.mission = "AIDS United’s mission is to end the AIDS epidemic in the United States.";
    charity3.img = "assets/imgs/Charity3.jpg";
    charity3.url = "https://www.aidsunited.org/";
    charity3.bank = "Bank of America";
    charity3.accountnumber = "2345678901234567";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "Global Fund for Children";
    charity4.mission = "Global Fund for Children partners with grassroots organizations around the world to help children and youth reach their full potential and advance their rights.";
    charity4.img = "assets/imgs/Charity4.png";
    charity4.url = "https://globalfundforchildren.org/";
    charity4.bank = "Bank of America";
    charity4.accountnumber = "3456789012345678";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
    */
    //this.charities = this.getCharities();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalCharityPage');
  }

  ionViewWillEnter() {
    this.http.get("https://matte-pistachio-api.herokuapp.com/mycharity").subscribe((result => {var response = result.json();
      this.mycharities = response;
      console.log(this.mycharities);
      }
    ));
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  }

}
