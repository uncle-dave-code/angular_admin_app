import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import {ChartModule} from 'primeng/chart';



@NgModule({
  declarations: [
    AnalyticsComponent,
    MainBoardComponent,
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    ButtonModule,
    ChartModule
  ]
})
export class DashboardsModule { }
