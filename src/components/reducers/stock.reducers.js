import {StockConstants} from '../actions/stock.action';

export const StockReducers =(state=[],action)=>{
    switch(action.type){

        case StockConstants.IS_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isAddSuccess: false,
                error: null
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
                isLoading: false,
                isSuccess:false,
                error: action.payload
            }
        case StockConstants.GET_ITEMS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isSuccess: true,
                itemsArray:action.payload,
            }

        case StockConstants.GET_ITEMS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isSuccess:true,
                error:action.payload
            }

        case StockConstants.ADD_ITEMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                error: action.payload
            }

        case StockConstants.ADD_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
            }
        case StockConstants.SALE_ITEMS_SUCCESS: 
             return {
                ...state,
                isLoading: false,
                isSuccess: true
            } 
        case StockConstants.SALE_ITEMS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        default:
            return {
                ...state
            }
    }

}