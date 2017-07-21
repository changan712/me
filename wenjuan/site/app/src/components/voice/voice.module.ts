import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceComponent } from './voice';

@NgModule({
  declarations: [
    VoiceComponent,
  ],
  imports: [
    IonicPageModule.forChild(VoiceComponent),
  ],
  exports: [
    VoiceComponent
  ]
})
export class VoiceComponentModule {}
