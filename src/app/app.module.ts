import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    PaymentPage,
    CharityProfilePage,
    CharityListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
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
    CharityListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
