import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 userId : number | undefined = undefined;
 accounts : any = undefined;
 accSelected : string = "";
 accountnames : any = undefined;
 name : any = undefined;
 details : any = undefined;
 creditdetails : any = undefined;
 transactiondetails : any = undefined;
  constructor(private _activatedRoute : ActivatedRoute, private _service : AccountServiceService) { }

  ngOnInit(): void {
   this._activatedRoute.params.subscribe((key : Params) => this.userId = key.userID);

   this.accounts = [
     "Savings","Checking"
   ];

   this.accSelected = "Savings";
  }
onAccountSelected(value :any){
this.accountnames=this._service.fetchList(value);
}
onSelect(value : any){
this.details=this._service.fetchAccountDetails(value);
}
onClick(value : any){
this.creditdetails=this._service.fetchCreditDetails(value);
}
handleClick(value : any){
  this.transactiondetails=this._service.fetchTransaction(value);
}
}
