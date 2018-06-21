import { BrowserModule } from '@angular/platform-browser';
import { Component, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/Registration/registration';
import { LoginPage } from '../pages/Login/login';
import { ProfilePage } from '../pages/Profile/profile';
import { HttpModule } from '@angular/http';
import { PaymentPage } from '../pages/Payment/payment';
import { AuthService } from '../auth.service';
import { CharityListPage } from '../pages/CharityList/charityList';
import { CharityProfilePage } from '../pages/CharityProfile/charityProfile';
import { PersonalCharityPage } from '../pages/PersonalCharity/personalCharity';
import { TabsPage } from '../pages/Tabs/tabs';

import { StripeJavaScriptPage } from '../pages/stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../pages/stripe-native/stripe-native';
import { Stripe } from '@ionic-native/stripe';
import { IonicStorageModule } from '@ionic/storage';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MenuPage } from '../pages/menu/menu';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    PaymentPage,
    CharityProfilePage,
    CharityListPage,
    PersonalCharityPage,
    TabsPage,
    StripeJavaScriptPage,
    StripeNativePage,
    MenuPage,
    SettingsPage
  ],
  
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LottieAnimationViewModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    PaymentPage,
    CharityProfilePage,
    CharityListPage,
    PersonalCharityPage,
    TabsPage,
    StripeJavaScriptPage,
    StripeNativePage,
    MenuPage,
    SettingsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
