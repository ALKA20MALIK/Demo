import * as AllCustomerActions from "../store/customer.action";
import { Customer } from '../models/customer.model';
import * as fromApp from "../../store/app.reducer";

export interface FeatureState extends fromApp.AppState{
    customers:State,
    error:string
}
export interface State {
    customers:Customer[],
    error:string
  }
 
const initialState: State = {
    customers: [],
    error:null
}
export function CustomerReducer(state=initialState,action: AllCustomerActions.CustomerActions ){

    switch(action.type){
        case "ADD_CUSTOMER":
            return {
                ...state,
                customers: [...state.customers, action.payload]
              };
        case "EDIT_CUSTOMER_END":
            debugger
            const updatedCustomer={
                ...state.customers[action.payload.index],
                ...action.payload
            }
            
            const updatedCustomers=[...state.customers];
            updatedCustomers[action.payload.index]=updatedCustomer

            return {
                ...state,
                customers:action.payload
            };
            
        case "DELETE_CUSTOMER":
            return {
                ...state,
                customers: state.customers.filter((item)=>{
                    debugger
                    return item.id!=action.payload
                }),
              };
        case "SET_CUSTOMERS":
            return {
                ...state,
                customers:[...action.payload]
            };
        case "ERROR":
            return {
                ...state,
                error:action.payload
            };
        default :
            state

    }
}