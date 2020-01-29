import { ActionReducerMap } from '@ngrx/store';
import * as fromCustomer from '../customer/store/customer.reducer';

export interface AppState {
    customers: fromCustomer.State
}

// export const reducers: ActionReducerMap<AppState> = {
//     //customerList : fromCustomer.CustomerReducer()
// }