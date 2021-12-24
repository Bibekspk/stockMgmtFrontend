import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { StockFormComponent } from '../StockForm/stockForm'

export const AddStock=()=> {

    let state = useSelector((state)=>(state.stocks))

    let handleSubmit=(data)=>{
        console.log(data);
    }

    return (
        <div>
            <StockFormComponent
                mode="Add Stock"
                submitData={handleSubmit}
                isLoading = {state.isLoading}
            >
            </StockFormComponent>        
        </div>
    )
}
