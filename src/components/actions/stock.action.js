import { HttpCLient } from "../../utilities/httpClient"

export const StockConstants={
    IS_LOADING:"ISLOADING",
    GET_ITEMTYPE_SUCCESS: "GET_ITEMTYPE_SUCCESS",
    GET_ITEMTYPE_FAILURE: "GET_ITEMTYPE_FAILURE"
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

export const getItemTypeAction=()=>dispatch=>{
    dispatch(isLoading());
    HttpCLient.GET('/stock/getItemType',null,true)
        .then((response)=>{
            dispatch(getItemTypeSuccess(response.data.data));
            console.log(response.data.data);
        })
        .catch((error)=>{
            console.log(error.data.msg);
            dispatch(getItemTypeFailure(error.data.msg));
        })
}