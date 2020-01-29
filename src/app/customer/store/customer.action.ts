import { Action } from '@ngrx/store'
import { Customer } from '../models/customer.model'

export const ADD_CUSTOMER='ADD_CUSTOMER'

export const EDIT_CUSTOMER_START='EDIT_CUSTOMER_START'
//export const EDIT_CUSTOMER='EDIT_CUSTOMER'
export const EDIT_CUSTOMER_END='EDIT_CUSTOMER_END'

export const DELETE_CUSTOMER='DELETE_CUSTOMER'

export const FETCH_CUSTOMERS='FETCH_CUSTOMERS'
export const SET_CUSTOMERS='SET_CUSTOMERS'
export const FETCH_CUSTOMERS_SUCCESSS='FETCH_CUSTOMERS_SUCCESSS'
export const ADD_CUSTOMER_SUCCESS='ADD_CUSTOMER_SUCCESS'
export const ADD_CUSTOMER_TO_STATE='ADD_CUSTOMER_TO_STATE'
export const DELETE_CUSTOMER_SUCCESS='DELETE_CUSTOMER_SUCCESS'
export const ERROR='ERROR'

export class FetchCustomers implements Action{
    readonly type=FETCH_CUSTOMERS
}
export class SetCustomers implements Action{
    readonly type=SET_CUSTOMERS
    constructor(public payload:Customer[]){}
}

export class EditCustomerStart implements Action{
    readonly type=EDIT_CUSTOMER_START
    constructor(public payload :{index:number, updatedCustomer: Customer}) {
    }
}

export class EditCustomerEnd implements Action{
    readonly type=EDIT_CUSTOMER_END
    constructor(public payload :{index:number, updatedCustomer: Customer}) {
    }
}

export class AddCustomer implements Action{
    readonly type=ADD_CUSTOMER
    constructor(public payload: Customer) {

    }  
}
export class AddCustomerSuccess implements Action{
    readonly type=ADD_CUSTOMER_SUCCESS
    constructor(public payload : Customer){
    }
}
export class AddCustomerToState implements Action{
    readonly type=ADD_CUSTOMER_TO_STATE
    constructor(public payload : Customer){
    }
}
export class DeleteCustomer implements Action{
    readonly type=DELETE_CUSTOMER
    constructor(public payload : number){
    }
}
export class DeleteCustomerSuccess implements Action{
    readonly type=DELETE_CUSTOMER_SUCCESS
    constructor(public payload : number){
    }
}
export class ErrorMessage implements Action{
    readonly type=ERROR
    constructor(public payload : string){
    }
}

export type CustomerActions= 
FetchCustomers | 
SetCustomers |
AddCustomer | 
AddCustomerToState |
AddCustomerSuccess |
EditCustomerStart | 
EditCustomerEnd | 
DeleteCustomer |
DeleteCustomerSuccess |
ErrorMessage
