import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { PaymentPage } from '../Payment/payment';
import { LoginPage } from '../Login/login';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';
import { Chart } from 'chart.js';
import { AuthService } from "../../auth.service";
import { Http } from '@angular/http';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public password: string;
  public donations: Array<any> = [];
  public charities: Array<any> = [];
  public amounts: Array<any> = [0, 0, 0, 0, 0, 0, 0];

  private token: string;

  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, private app: App, public http: Http, private appRef: ApplicationRef) {

  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");

    this.token = localStorage.getItem("TOKEN");
    console.log("profile name", this.token);

    this.authService.getMe((err, user) => {
      console.log('ionViewDidLoad ProfilePage');
      this.http.get(`http://localhost:3000/charity?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.charities = response;
        }
      ));
      this.http.get(`http://localhost:3000/donation?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.donations = response;
        this.createAmountList();
        this.pieChart = new Chart(this.pieCanvas.nativeElement, {

          type: 'pie',
          data: {
            labels: this.createCharityList(),
            datasets: [{
              label: '# of Money Donated',
              data: this.amounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(256, 100, 20, 0.8)'
              ]
            }]
          }
        });
        }
      ));
    });
  }

  ionViewWillEnter() {
    this.username = this.navParams.get("username");

    this.token = localStorage.getItem("TOKEN");
    console.log("profile name", this.token);

    this.authService.getMe((err, user) => {
      console.log('ionViewWillEnter ProfilePage');
      this.http.get(`http://localhost:3000/charity?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.charities = response;
        }
      ));
      this.http.get(`http://localhost:3000/donation?jwt=${localStorage.getItem("TOKEN")}`).subscribe((result => {var response = result.json();
        this.donations = response;
        this.createAmountList();
        this.pieChart = new Chart(this.pieCanvas.nativeElement, {

          type: 'pie',
          data: {
            labels: this.createCharityList(),
            datasets: [{
              label: '# of Money Donated',
              data: this.amounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(256, 100, 20, 0.8)'
              ]
            }]
          }
        });

        this.appRef.tick();
        }
      ));

      console.log(this.donations);
      console.log(this.charities);
      console.log(this.amounts);

      this.username = user.username;

    });


  }

  
  add() {
    this.pieChart.data.labels.push('Test');
    this.pieChart.data.datasets[0].data.push(50);
    this.pieChart.data.datasets[0].backgroundColor.push('rgba(256, 100, 20, 0.8)');

    console.log(this.pieChart);
    console.log(this.pieChart.data);

  }


  createCharityList() {
    var i;
    var list = [];
    for (i = 0; i < this.charities.length; i++) { 
      list.push(this.charities[i].name);
    }
    return list;
  }

  createAmountList() {
    this.amounts = [0, 0, 0, 0, 0, 0, 0];
    var i;
    for (i = 0; i < this.donations.length; i++) { 
      if (this.donations[i].charityid == 1) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[0] += amount;
      }
      else if (this.donations[i].charityid == 2) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[1] += amount;
      }
      else if (this.donations[i].charityid == 3) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[2] += amount;
      }
      else if (this.donations[i].charityid == 4) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[3] += amount;
      }
      else if (this.donations[i].charityid == 5) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[4] += amount;
      }
      else if (this.donations[i].charityid == 6) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[5] += amount;
      }
      else if (this.donations[i].charityid == 7) {
        var amount = Math.floor(this.donations[i].amount/100);
        this.amounts[6] += amount;
      }
    }
  }

  navigateToPersonalCharity() {
    this.navCtrl.push(PersonalCharityPage);
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }

  navigateToLogin() {
    this.authService.logout();
    this.app.getRootNav().setRoot(LoginPage)
  }

}