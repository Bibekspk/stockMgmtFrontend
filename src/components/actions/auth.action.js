import { HttpCLient } from "../../utilities/httpClient";
import navigate from '../../history'

export const AuthConstant ={
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    IS_LOADING: "IS_LOADING"
}

export const loginSuccessAction=(data)=>({
    type: AuthConstant.LOGIN_SUCCESS,
    payload: data
})

export const loginFailureAction=(error)=>({
    type: AuthConstant.LOGIN_FAILURE,
    payload: error
})

export const isLoading=()=>({
    type:AuthConstant.IS_LOADING
})

export const LoginAction=(data)=>dispatch=>{
    dispatch(isLoading());
    HttpCLient.POST('/login',data)
        .then((data)=>{
            dispatch(loginSuccessAction(data));
            navigate.push('/home');
        })
        .catch((error)=>{
            dispatch((loginFailureAction(error)));
        })
}