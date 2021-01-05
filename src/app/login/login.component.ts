import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
userId : number | undefined = undefined;
 password : string | undefined = undefined;

 constructor(private _service : AccountServiceService, private _router : Router){}
 handleLogin(loginValues : any){
   let loggedIn = this._service.authenticate(loginValues.userId, loginValues.password);
   if(loggedIn){
    this._router.navigate(["account",loginValues.userId]);
   }
 }

}
