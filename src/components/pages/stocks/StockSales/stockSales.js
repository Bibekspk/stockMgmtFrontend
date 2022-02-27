import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { StockFormComponent } from '../StockForm/stockForm';

export const StockSale = ()=>{

    let dispatch = useDispatch();
    let state = useSelector((state)=>state.stocks)

    const confirmSale = (data)=>{
        console.log(data);
    }

    return (
        <StockFormComponent
            mode = "Sales of Stocks"
            SubmitData={confirmSale}
            isLoading = {state.isLoading}
        >
        </StockFormComponent>
    )
}