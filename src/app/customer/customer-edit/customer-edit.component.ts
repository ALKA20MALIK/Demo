import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Store } from '@ngrx/store'; 
import { Customer } from '../models/customer.model'; 
import * as customerAction from "../store/customer.action"; 
import { NgForm } from '@angular/forms'; 
import { Router, ActivatedRoute,Params} from '@angular/router'; 
import { Subscription } from 'rxjs';
import * as fromCustomer from '../store/customer.reducer'

@Component({ 
   selector: 'app-customer-edit', 
   templateUrl: './customer-edit.component.html', 
   //styleUrls: ['./customer-edit.component.css'] 
 }) 
 export class CustomerEditComponent implements OnInit,OnDestroy { 
  id:number
  editMode=false
  customer: Customer 
  subscription:Subscription

   constructor(private router:Router,private route: ActivatedRoute, private store:Store<fromCustomer.FeatureState>) { } 
   
   ngOnInit() { 
     this.route.params 
       .subscribe(
         (params: Params) => { 
           debugger
           this.id = +params['id']; 
           if(this.id!=0){
            this.editMode=true
           }
         } 
       )
       
       if (this.editMode) { 
        this.store.select('customers').subscribe((customerList:any)=>{ 
             this.customer = customerList.customers.filter(customer => customer.id === this.id)[0];
           }); 
       } 
       else
       { 
         this.customer=new Customer(null,null,null,null) 
       } 
   } 

   onSubmit(form:NgForm){ 
     const value=form.value 
     value.id=+value.id
     
     const newCustomer=new Customer(this.id,value.FirstName,value.LastName,value.Phone) 
 
     if(this.editMode){ 
      debugger
       this.store.dispatch(new customerAction.EditCustomerStart({index:this.id, updatedCustomer: newCustomer})) 
     } 
     else 
     { 
       this.store.dispatch(new customerAction.AddCustomer(form.value)) 
     } 
     this.router.navigate(['']); 
   } 
 
   ngOnDestroy(){
    //this.subscription.unsubscribe()
   }
 } 
