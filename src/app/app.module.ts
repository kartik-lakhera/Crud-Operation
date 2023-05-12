import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/auth/auth.guard';
import { UnAuthGuard } from './core/un-auth/un-auth.guard';


//state
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { userState } from './ngxs/state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    NgxsModule.forRoot([userState], {
      developmentMode: !environment.production
    })

  ],
  providers: [
    AuthGuard,
    UnAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
