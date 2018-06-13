import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalCharityPage } from './personalCharity';

@NgModule({
  declarations: [
    PersonalCharityPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalCharityPage),
  ],
})
export class PersonalCharityPageModule {}
