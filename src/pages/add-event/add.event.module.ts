import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular/umd';

import { AddEventPage } from './add.event';

@NgModule({
  declarations: [
    AddEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventPage),
    TranslateModule.forChild()
  ],
  exports: [
    AddEventPage
  ]
})
export class AddEventPageModule { }
