import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';


let routes : Routes = [
  {path:"", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "account/:userID", component : AccountComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent
    ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),ScrollingModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
