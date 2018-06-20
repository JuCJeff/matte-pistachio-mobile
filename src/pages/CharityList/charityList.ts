import { Component } from '@angular/core';
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
  public charities: Array<Charity> = [];
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthService) {

    /*
    //Charities instances
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

    var charity5 = new Charity();
    charity5.id = 5;
    charity5.name = "Rainforest Alliance";
    charity5.mission = "Rainforest Alliance is an international nonprofit organization who stands for biodiversity conservation and sustainable livelihoods.";
    charity5.img = "assets/imgs/Charity5.jpg";
    charity5.url = "https://www.rainforest-alliance.org/";
    charity5.bank = "American Express";
    charity5.accountnumber = "4567890123456789";

    var charity6 = new Charity();
    charity6.id = 6;
    charity6.name = "The Art Fund";
    charity6.mission = "Public Art Fund brings dynamic contemporary art to a broad audience in New York City and beyond by mounting ambitious free exhibitions of international scope and impact that offer the public powerful experiences with art and the urban environment." ;
    charity6.img = "assets/imgs/Charity6.jpg";
    charity6.url = "https://globalfundforchildren.org/";
    charity6.bank = "American Express";
    charity6.accountnumber = "5678901234567890";

    var charity7 = new Charity();
    charity7.id = 7;
    charity7.name = "World Widelife Fund for Nature";
    charity7.mission = "To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature.";
    charity7.img = "assets/imgs/Charity7.jpg";
    charity7.url = "https://www.worldwildlife.org/";
    charity7.bank = "Bank of America";
    charity7.accountnumber = "6789012345678901";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
    this.charities.push(charity5);
    this.charities.push(charity6);
    this.charities.push(charity7);
    */

  }

  ionViewWillEnter() {
    this.token = localStorage.getItem("TOKEN");
    this.authService.getMe((err) => {
      console.log('ionViewDidLoad CharityListPage');
      this.http.get(`http://localhost:3000/charity?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.charities = response;
        }
      ));
    });
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  }

}
