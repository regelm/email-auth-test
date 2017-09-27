import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

import { AuthService } from './core/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireDatabase } from "angularfire2/database";
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { StudentComponentComponent } from './students/student-component/student-component.component';
import { StudentFormComponent } from './students/student-form/student-form.component';

export const firebase = {
  apiKey: "AIzaSyBYY3WTjz1qMHnHr09YUYgzoL7jGNqMsns",
  authDomain: "email-auth-test-39f7b.firebaseapp.com",
  databaseURL: "https://email-auth-test-39f7b.firebaseio.com",
  projectId: "email-auth-test-39f7b",
  storageBucket: "",
  messagingSenderId: "55556855478"
}

export class AdListing {
  title = 'Your Title'
  content = 'Ad Content'
  price = 5.00
  image = 'http://via.placeholder.com/350x150'
}


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserInfoComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemFormComponent,
    StudentComponentComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
