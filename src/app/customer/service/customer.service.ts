import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable, of } from 'rxjs';
import { switchMap, map,catchError, tap } from "rxjs/Operators";
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService{
    private _baseUrl='http://localhost:3000/customers'

    constructor(private httpClient:HttpClient){
    }

    getCustomers():Observable<Customer[]>{
        return this.httpClient.get<Customer[]>(this._baseUrl)
    }
    postCustomer(Customer: Customer ):Observable<Customer>{
        return this.httpClient.post<Customer>(this._baseUrl,Customer)
    }

    putCustomer(Customer: Customer ,CustomerId:number):Observable<any>{
         return this.httpClient.put<Observable<any>>(this._baseUrl+'/'+ CustomerId ,Customer)
    }
    
    deleteCustomer(CustomerId: number){
        return this.httpClient.delete(this._baseUrl+'/'+ CustomerId)
    }
   
}