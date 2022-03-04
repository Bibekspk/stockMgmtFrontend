import { errorHandler, ErrorToaster, SuccessToaster } from "../../utilities/errorHandler"
import { HttpCLient } from "../../utilities/httpClient"

export const StockConstants={
    IS_LOADING:"ISLOADING",
    GET_ITEMTYPE_SUCCESS: "GET_ITEMTYPE_SUCCESS",
    GET_ITEMTYPE_FAILURE: "GET_ITEMTYPE_FAILURE",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
    GET_ITEMS_FAILURE : "GET_ITEMS_FAILURE",
    ADD_ITEMS_SUCCESS : 'ADD_ITEMS_SUCCESS',
    ADD_ITEMS_FAILURE : 'ADD_ITEMS_FAILURE',
    SALE_ITEMS_FAILURE : 'SALE_ITEMS_FAILURE',
    SALE_ITES_SUCCESS : 'SALE_ITEMS_SUCCESS'
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

const addStockSuccess=(data)=>({
    type: StockConstants.ADD_ITEMS_SUCCESS,
    payload: data
})

const addStockFailure=(error)=>({
    type:StockConstants.ADD_ITEMS_FAILURE,
    payload:error
})

const saleItemsSuccess = (data)=>({
    type: StockConstants.SALE_ITES_SUCCESS,
    payload: data
})

const saleItemsFailure =(error)=>({
    type: StockConstants.SALE_ITEMS_FAILURE,
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
            ErrorToaster(errorMsg);
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
          let errorMsg= errorHandler(error);
            dispatch(getItemsFailure(errorMsg));
            ErrorToaster(errorMsg);
        })
}

export const AddStockAction=(data)=>dispatch=>{
    dispatch(isLoading());
    HttpCLient.POST('/stock/addStock',data,null,true)
        .then((response)=>{
            dispatch(addStockSuccess(response.data.data))
            SuccessToaster(response.data.msg)
        })
        .catch((error)=>{
            dispatch(addStockFailure(error))
           let errorMsg =  errorHandler(error)
           ErrorToaster(errorMsg)
        })
}

export const SaleItemsAction=(data)=>dispatch=>{
    dispatch(isLoading());
    HttpCLient.POST('/stock/saleStock',data,null,true)
        .then((data)=>{
            
        })
        .catch((err)=>{
            console.log(err);
        })
}