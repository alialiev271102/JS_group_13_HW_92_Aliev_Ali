import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessengerComponent} from "./pages/messenger/messenger.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistarationComponent} from "./pages/registaration/registaration.component";

const routes: Routes = [
  {path: '', component: MessengerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistarationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
