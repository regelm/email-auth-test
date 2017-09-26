import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { UserInfoComponent } from "./users/user-info/user-info.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'user', component: UserInfoComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}