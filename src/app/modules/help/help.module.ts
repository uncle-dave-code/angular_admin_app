import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs/faqs.component';
import { SupportComponent } from './support/support.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    FaqsComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class HelpModule { }
