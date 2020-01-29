
import * as AllCustomerActions from "../store/customer.action";
import { switchMap, map,catchError, tap, mergeMap } from "rxjs/Operators";
import { HttpClient } from '@angular/common/http';
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerEffect {
    @Effect() //to get customers
    getCustomers$: Observable<Action> = this.actions$.pipe(
        ofType(AllCustomerActions.FETCH_CUSTOMERS),
        switchMap(() => this.customerService.getCustomers().pipe(
            map((data:Customer[]) => new AllCustomerActions.SetCustomers(data)),
            catchError((error:string)=> of(new AllCustomerActions.ErrorMessage(error)))
            )))
    
    @Effect({dispatch:false}) //create customer
    CreateCustomer$: Observable<Action> = this.actions$.pipe(
      ofType(AllCustomerActions.ADD_CUSTOMER),
      switchMap((action:AllCustomerActions.AddCustomer) => this.customerService.postCustomer(action.payload).pipe(
          map((data) => new AllCustomerActions.AddCustomerToState(data)),
          catchError((error:string)=> of(new AllCustomerActions.ErrorMessage(error)))
          )))

  @Effect({dispatch:false}) //update customer
    updateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(AllCustomerActions.EDIT_CUSTOMER_START),
    switchMap((action:AllCustomerActions.EditCustomerStart) =>this.customerService.putCustomer(action.payload.updatedCustomer,action.payload.index).pipe(
            map((action ) => new AllCustomerActions.EditCustomerEnd({index:action.id, updatedCustomer:action})),
            catchError((error:string)=> of(new AllCustomerActions.ErrorMessage(error)))
        )))

  @Effect({dispatch:false}) //delete customer
  deleteCustomer$: Observable<Action> = this.actions$.pipe(
  ofType(AllCustomerActions.DELETE_CUSTOMER),
  switchMap((action:any) => this.customerService.deleteCustomer(action.payload).pipe(
      map(() => new AllCustomerActions.DeleteCustomerSuccess(action)),
      catchError((error:string)=> of(new AllCustomerActions.ErrorMessage(error)))
      )))

    constructor(private actions$: Actions, private httpClient:HttpClient,private customerService:CustomerService){
        //console.log(this.getCustomers$)
    }
    
}