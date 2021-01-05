import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  
  
  constructor(private _http : HttpClient) { }

  authenticate(userId : number, password : string) : boolean {
   if((userId == 1) && password == "angular"){
     return true;
   }
   else{
     return false;
   }
  }
   fetchList(value : any) : Observable<any>{
    let uri = `http://localhost:8081/${value}`;
    return this._http.get(uri);
    
   }

   fetchAccountDetails(name : any) : Observable<any> {
    let uri = `http://localhost:8081/${name}`;
    return this._http.get(uri);
   }
  fetchCreditDetails(number : any) : Observable<any> {
    let uri = `http://localhost:8081/${number}`;
    return this._http.get(uri);
  }
  fetchTransaction(number : any) : Observable<any> {
   
    let uri = `http://localhost:8081/${number}`;
    return this._http.get(uri);
  }
  }
  
