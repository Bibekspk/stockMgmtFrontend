import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StockFormComponent } from '../StockForm/stockForm'
import { AddStockAction } from '../../../actions/stock.action'

export const AddStock=()=> {

    let state = useSelector((state)=>(state.stocks));
    let dispatch = useDispatch()

    let handleSubmit=(data)=>{
        console.log("inside addStock",data);
       dispatch(AddStockAction(data));
    }

    return (
        <div>
            <StockFormComponent
                mode="Add Stock"
                SubmitData={handleSubmit}
                isLoading = {state.isLoading}
            >
            </StockFormComponent>        
        </div>
    )
}
