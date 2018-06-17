import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";

declare var Stripe;

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  stripe = Stripe('pk_test_jDlfN81b4iL42VOZJrfXRI4F');
  card: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad(callback: Function) {
    this.setupStripe(callback);
  }

  setupStripe(callback: Function) {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });

    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();

      this.stripe.createToken(this.card)
        .then((response) => {
          this.http
          .post("http://localhost:3000/stripepayment", response.token)

        .subscribe(
          result => {
            var responseJson = result.json();

            //Store the charge in local storage
            localStorage.setItem("charge", responseJson.charge);
            //callback();
          },

          error => {
            //callback(error);
          }
        );
        console.log(response.token);
        })
        .catch((error) => {
          console.error(error)
        });

      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
        }
      });
    });

    /*this.http
        .post("http://localhost:3000/stripepayment", {
          token: this.token
        });
    .subscribe(
        result => {
            var responseJson = result.json();

            //Store the token in local storage
            localStorage.setItem("TOKEN", responseJson.token);
            callback();
        },

        error => {
            callback(error);
        }
    );*/
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Donation Successful!',
      subTitle: 'Thank you for your support!',
      buttons: ['OK']
    });
    alert.present();
  }

}