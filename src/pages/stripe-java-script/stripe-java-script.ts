import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StripeJavaScriptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var Stripe;

@Component({
  selector: 'page-stripe-java-script',
  templateUrl: 'stripe-java-script.html',
})
export class StripeJavaScriptPage {

  stripe = Stripe('pk_test_jDlfN81b4iL42VOZJrfXRI4F');
  card: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.setupStripe();
  }

  setupStripe(){
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
        .then(token => console.log(token))
        .catch(error => console.error(error));
        
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
        }
      });
    });
  }

}
