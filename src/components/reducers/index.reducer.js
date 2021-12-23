import { combineReducers } from "redux";
import {AuthReducer} from './auth.reducer'
import { StockReducers } from "./stock.reducers";

let indexReducers = combineReducers({
    auth : AuthReducer,
    stocks: StockReducers
})

export default indexReducers;