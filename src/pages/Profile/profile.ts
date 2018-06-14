import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../Payment/payment';
import { LoginPage } from '../Login/login';
import { PersonalCharityPage } from '../PersonalCharity/personalCharity';
import { Chart } from 'chart.js';
import { AuthService } from "../../auth.service";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public password: string;
  private token: string;

  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {

  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");

    this.token = localStorage.getItem("TOKEN");//this.navParams.get("token");
    console.log("profile name", this.token);

    this.authService.getMe((err, user) => {

      this.username = user.username;

      this.pieChart = new Chart(this.pieCanvas.nativeElement, {

        type: 'pie',
        data: {
          labels: ["Animal Equality", "ACCESS College", "AIDS United", "GF for children"],
          datasets: [{
            label: '# of Money Donated',
            data: [130, 90, 50, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)'
              // 'rgba(153, 102, 255, 0.8)',
              // 'rgba(255, 159, 64, 0.8)',
              // 'rgba(256, 100, 20, 0.8)'
            ]
          }]
        }
      });
    });


  }

  add() {
    this.pieChart.data.labels.push('Test');
    this.pieChart.data.datasets[0].data.push(50);
    this.pieChart.data.datasets[0].backgroundColor.push('rgba(256, 100, 20, 0.8)');

    console.log(this.pieChart);
    console.log(this.pieChart.data);

  }

  navigateToPersonalCharity() {
    this.navCtrl.push(PersonalCharityPage);
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }

  navigateToLogin() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}