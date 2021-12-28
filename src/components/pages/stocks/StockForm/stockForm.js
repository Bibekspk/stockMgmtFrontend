import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getItemsAction, getItemTypeAction } from '../../../actions/stock.action';
import Select from 'react-select';
import { toast } from 'react-toastify';

let addForm = {
    'itemName': "",
    'quantity': "",
    'itemType': "",
    'rate': "",
    'purchasedDate': ""

}
export class StockForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemType: [],
            items: [],
            stockData: { ...addForm },
            isValidate: ''
        }
    }

    componentDidMount = () => {
        this.props.getItemType();
        this.props.getItems();
    }

    componentDidUpdate = (prevProps,prevState) => { //checks if the prevProps and newProps are same, if not it runs
        let { itemType,items } = this.state
        if (prevProps.itemTypeArray !== this.props.itemTypeArray) { //checking prev and latest prop
            (this.props.itemTypeArray || []).map((item) => {
                let itemObject = {
                    value: item.itemType,
                    label: item.itemType
                }
                itemType.push(itemObject);
                this.setState({
                    'itemType': [...itemType] // spreading array to add new object individually into the array
                })
            })
        }
        if(prevProps.itemArray !== this.props.itemArray){
            (this.props.itemArray || []).map((item)=>{
                let itemObject ={
                    value: item.itemName,
                    label: item.itemName
                }
                items.push(itemObject);
                this.setState((prevState)=>({
                    ...prevState,
                    items: [...items]
                }))
            })
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState((prevState) => ({
            stockData: {
                ...prevState.stockData,
                [name]: value
            }
        }))
    }

    handleSelect = (selectedOption) => {
        this.setState((prevState) => ({
            stockData: {
                ...prevState.stockData,
                'itemType': selectedOption.value
            }
        }))
    }

    validateForm=()=>{
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {stockData} = this.state;
        if(!stockData.itemType) 
        return toast.info("Please select Item Type !!!");
        this.props.submitData(this.state.stockData);
        
    }
    render() {
        return (
                <div className='addStock me-3'>
                    <h2 className='ms-2'>{this.props.mode}</h2>
                    <form className='card ms-2 form-group px-3 py-3' onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label'>Item Name</label>
                                {/* <input className='form-control' type="text" name="itemName" id="itemName" onChange={this.handleChange} required></input> */}
                                <Select
                                    options={this.state.items}
                                    onChange={this.handleSelect}
                                    isSearchable="true"
                                    required
                                >
                                </Select>
                            </div>

                            <div className='col'>
                                <label className='form-label'>Item Type</label>
                                <Select
                                    options={this.state.itemType}
                                    onChange={this.handleSelect}
                                    isSearchable="true"
                                    required
                                >
                                </Select>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label className='form-label'>Quantity</label>
                                <input className='form-control' type="number" name="quantity" id="quantity" onChange={this.handleChange} required></input>
                            </div>
                        </div>
                        <hr></hr>
                        <button disabled={this.props.isLoading} className='btn btn-success' type="submit">{this.props.isLoading? "Adding Stock" : "Add Stock"}</button>
                    </form>

                </div>
        )
    }
}

const MapDispatchToProps = dispatch => ({
    getItemType: () => (dispatch(getItemTypeAction())),
    getItems :()=> (dispatch(getItemsAction()))
})

const MapStateToProps = (rootState) => ({
    itemTypeArray: rootState.stocks.itemTypeArray,
    isLoading: rootState.stocks.isLoading,
    itemArray: rootState.stocks.itemsArray
})

export const StockFormComponent = connect(MapStateToProps, MapDispatchToProps)(StockForm)
