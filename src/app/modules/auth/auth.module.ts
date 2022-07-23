import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TranslocoModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    DropdownModule,
    FormsModule
  ],
  providers: [
    MessageService
  ]
})
export class AuthModule { }
