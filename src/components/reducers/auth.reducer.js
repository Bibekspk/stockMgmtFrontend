import { AuthConstant } from "../actions/auth.action";

export const AuthReducer=(state=[],action)=>{
    
    switch(action.type){
        case AuthConstant.IS_LOADING:
            return {
                ...state,
                isLoading:true,
            }
        case AuthConstant.LOGIN_SUCCESS:
            return{
                ...state,
                user:action.payload,
                isLoading:false
            }
        case AuthConstant.LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            }
        default :
            return {
                ...state
            }
    }
}