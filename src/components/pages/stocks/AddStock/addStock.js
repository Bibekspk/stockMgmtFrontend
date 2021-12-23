import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getItemTypeAction } from '../../../actions/stock.action';

export class AddStock extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props.getItemType());
        console.log(this.props.itemArray);
    }
    render() {
        let {itemArray} = this.props
        return (
            <div className='addStock me-3'>
                <h2 className='ms-2'>Add Stock</h2>
                <form className='card ms-2 form-group px-3 py-3'>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-label'>Item Name</label>
                            <input className='form-control' type="text" name="ItemName" id="ItemName"></input>
                        </div>

                        <div className='col'>
                            <label className='form-label'>Item Type</label>
                            <select className='form-select' type="text" name="ItemName" id="ItemName">
                            {
                                itemArray.map((item,index)=>(
                                    <option key={index} value={item.itemType}>{item.itemType}</option>
                                ))
                            }
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-label'>Quantity</label>
                            <input className='form-control' type="number" name="ItemName" id="ItemName"></input>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Rate</label>
                            <input className='form-control' type="number" name="ItemName" id="ItemName"></input>
                        </div> 
                        <div className='col'>
                            <label className='form-label'>Purchased Date</label>
                            <input className='form-control' type="date" name="ItemName" id="ItemName"></input>
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn btn-success' type="submit">Add Item</button>
                </form>

            </div>
        )
    }
}

const MapDispatchToProps=dispatch=>({
    getItemType : ()=>(dispatch(getItemTypeAction()))
})

const MapStateToProps=(rootState)=>({
    itemArray: rootState.stocks.itemTypeArray
})

export const AddStockComponent = connect(MapStateToProps,MapDispatchToProps)(AddStock)
