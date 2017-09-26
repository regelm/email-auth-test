import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

import { AuthService } from './core/auth.service';
import { LoginFormComponent } from './users/login-form/login-form.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireDatabase } from "angularfire2/database";

export const firebase = {
  apiKey: "AIzaSyBYY3WTjz1qMHnHr09YUYgzoL7jGNqMsns",
  authDomain: "email-auth-test-39f7b.firebaseapp.com",
  databaseURL: "https://email-auth-test-39f7b.firebaseio.com",
  projectId: "email-auth-test-39f7b",
  storageBucket: "",
  messagingSenderId: "55556855478"
}


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
