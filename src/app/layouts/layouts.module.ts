import { TranslocoModule } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {BadgeModule} from 'primeng/badge';
import {MenuModule} from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [
    DefaultComponent,
    EmptyComponent,
  ],
  imports: [
    TranslocoModule,
    CommonModule,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    BadgeModule,
    MenuModule,
    DropdownModule,
    FormsModule,
    AvatarModule,
  ]
})
export class LayoutsModule { }
