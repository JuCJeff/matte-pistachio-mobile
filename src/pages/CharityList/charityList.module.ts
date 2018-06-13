import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharityListPage } from '../CharityList/charityList';

@NgModule({
  declarations: [
    CharityListPage,
  ],
  imports: [
    IonicPageModule.forChild(CharityListPage),
  ],
})
export class CharityListPageModule {}