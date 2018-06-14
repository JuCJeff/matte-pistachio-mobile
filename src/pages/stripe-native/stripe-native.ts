import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';

/**
 * Generated class for the StripeNativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stripe-native',
  templateUrl: 'stripe-native.html',
})
export class StripeNativePage {

  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cardCVV: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe) {
  }

  ionViewDidLoad() {
    this.stripe.setPublishableKey('pk_test_jDlfN81b4iL42VOZJrfXRI4F');
  }

  validateCard(){
    let card = {
      number: this.cardNumber,
      expMonth: this.cardMonth,
      expYear: this.cardYear,
      cvc: this.cardCVV
    };
 
     // Run card validation here and then attempt to tokenise
     
    this.stripe.createCardToken(card)
      .then(token => console.log(token))
      .catch(error => console.error(error));
  }

}
