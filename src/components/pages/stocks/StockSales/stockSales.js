import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { SaleItemsAction } from '../../../actions/stock.action';
import { StockFormComponent } from '../StockForm/stockForm';

export const StockSale = ()=>{

    let dispatch = useDispatch();
    let state = useSelector((state)=>state.stocks)

    const confirmSale = (data)=>{
        console.log(data);
        dispatch(SaleItemsAction(data));
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