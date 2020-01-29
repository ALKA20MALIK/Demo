import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import * as customerActions from "../store/customer.action";
import * as fromCustomer from '../store/customer.reducer'
import { map } from 'rxjs/Operators';
import { Router, NavigationError,Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  //styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

   private customerlist :Observable<fromCustomer.State>;
  
   constructor(private store:Store<fromCustomer.FeatureState>, private router:Router) {
    
   }
  

  ngOnInit()  {
    debugger
    this.store.dispatch(new customerActions.FetchCustomers())

    this.customerlist=this.store.select('customers')
  }
  onDelete(id){ 
    debugger
     this.store.dispatch(new customerActions.DeleteCustomer(id)) 
  } 
  // ngOnDestroy(){
  //   this.customerlist=null
  // }
}
