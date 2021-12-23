import {StockConstants} from '../actions/stock.action';

export const StockReducers =(state=[],action)=>{
    switch(action.type){

        case StockConstants.IS_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                error:null
            }
        case StockConstants.GET_ITEMTYPE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                itemTypeArray : action.payload,
                isSuccess: true,
                error: null
            }
        case StockConstants.GET_ITEMTYPE_FAILURE:
            return{
                ...state,
                isLaoding: false,
                isSuccess:false,
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }

}