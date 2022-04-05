import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { RegistarationComponent } from './pages/registaration/registaration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessengerComponent,
    RegistarationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
