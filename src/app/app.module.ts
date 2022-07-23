import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardsModule } from './modules/dashboards/dashboards.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HelpModule } from './modules/help/help.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxWebstorageModule.forRoot(),
    TranslocoRootModule,
    LayoutsModule,
    AuthModule,
    DashboardsModule,
    HelpModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
