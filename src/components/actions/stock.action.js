import { toast } from "react-toastify"
import { errorHandler } from "../../utilities/errorHandler"
import { HttpCLient } from "../../utilities/httpClient"

export const StockConstants={
    IS_LOADING:"ISLOADING",
    GET_ITEMTYPE_SUCCESS: "GET_ITEMTYPE_SUCCESS",
    GET_ITEMTYPE_FAILURE: "GET_ITEMTYPE_FAILURE",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
    GET_ITEMS_FAILURE : "GET_ITEMS_FAILURE"
}

const isLoading=()=>({
    type: StockConstants.IS_LOADING,
})

const getItemTypeSuccess=(data)=>({
    type: StockConstants.GET_ITEMTYPE_SUCCESS,
    payload: data
})

const getItemTypeFailure=(error)=>({
    type: StockConstants.GET_ITEMTYPE_FAILURE,
    payload: error
})

const getItemsSuccess=(data)=>({
    type: StockConstants.GET_ITEMS_SUCCESS,
    payload: data
})

const getItemsFailure=(error)=>({
    type: StockConstants.GET_ITEMS_FAILURE,
    payload: error
})

export const getItemTypeAction=()=>dispatch=>{
    dispatch(isLoading());
    HttpCLient.GET('/stock/getItemType',null,true)
        .then((response)=>{
            dispatch(getItemTypeSuccess(response.data.data));
            console.log(response.data.data);
        })
        .catch((error)=>{
           let errorMsg = errorHandler(error);
            dispatch(getItemTypeFailure(errorMsg));
            toast.error(errorMsg);
        })
}

export const getItemsAction=()=>dispatch=>{
    dispatch(isLoading());
    HttpCLient.GET('/stock/getItems',null,true)
        .then((response)=>{
            dispatch(getItemsSuccess(response.data.data));
            console.log(response);
        })
        .catch((error)=>{
            let errorMsg = errorHandler(error);
            dispatch(getItemTypeFailure(errorMsg));
            toast.error(errorMsg);
        })
}