import { combineReducers } from "redux";
import {AuthReducer} from './auth.reducer'

let indexReducers = combineReducers({
    auth : AuthReducer
})

export default indexReducers;