import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getItemsAction, getItemTypeAction } from '../../../actions/stock.action';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { ReadOnlyRow } from './ReadOnlyRow';
import './stockForm.css'
import { EditableRow } from './EditableRow';

let addForm = {
    'id':"",
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
            purchaseArray: [],
            isValidate: '',
            editItemId: ''
        }
    }

    componentDidMount = () => {
        this.props.getItemType();
        this.props.getItems();
    }

    componentDidUpdate = (prevProps) => { //checks if the prevProps and newProps are same, if not it runs
        let { itemType, items } = this.state
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
        if (prevProps.itemArray !== this.props.itemArray) {
            (this.props.itemArray || []).map((item) => {
                let itemObject = {
                    value: item.itemName,
                    label: item.itemName,
                    id:item.ItemRef

                }
                items.push(itemObject);
                this.setState((prevState) => ({
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

    handleSelectItemType = (selectedOption) => {
        this.setState((prevState) => ({
            stockData: {
                ...prevState.stockData,
                'itemType': selectedOption.value
            }
        }))
    }

    handleSelectItem = (selectedOption)=>{
        this.setState((prevState)=>({
           stockData:{
               ...prevState.stockData,
               itemName: selectedOption.value,
               id: selectedOption.id
           } 
        }))
    }

    handleEditRow=(e,itemId)=>{
        e.preventDefault();
        console.log(itemId);
        console.log(this.state);
        this.setState((prevState)=>({
            ...prevState,
            editItemId: itemId
        }))
    }


    handleAdd = (e) => {
        e.preventDefault();
        let { stockData, purchaseArray } = this.state;
        if (!stockData.itemType )
            return toast.info("Please provide all the data  !!!");
        purchaseArray.push(stockData);
        this.setState({
            purchaseArray: [...purchaseArray]
        })
        // this.props.submitData(this.state.stockData);

    }
    render() {
        let { purchaseArray,editItemId } = this.state;
        return (
            <div className='addStock me-3'>
                <h2 className='ms-2'>{this.props.mode}</h2>
                <form className='card ms-2 form-group px-3 py-3'>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-label'>Item Name</label>
                            <Select
                                options={this.state.items}
                                onChange={this.handleSelectItem}
                                isSearchable="true"
                                required>
                            </Select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Item Type</label>
                            <Select
                                options={this.state.itemType}
                                onChange={this.handleSelectItemType}
                                isSearchable="true"
                                required>
                            </Select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label className='form-label'>Quantity</label>
                            <input className='form-control' type="number" name="quantity" id="quantity" onChange={this.handleChange} required="true"></input>
                        </div>
                        <div className='col-md-6'>
                            <label className='form-label'>Rate</label>
                            <input className='form-control' type="number" name="price" id="price" onChange={this.handleChange} required="true"></input>
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn btn-success' onClick={this.handleAdd} >Add Item</button>
                    <div className='tablediv'>
                        <table className='table table-striped text-center'>
                            <thead >
                                <tr>
                                    <th>SN</th>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Rate</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchaseArray.map((item, index) => (
                                    editItemId ? <EditableRow item={item}/> :
                                    <ReadOnlyRow item={item} index={index} handleEditRow={this.handleEditRow} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </form>


            </div>
        )
    }
}

const MapDispatchToProps = dispatch => ({
    getItemType: () => (dispatch(getItemTypeAction())),
    getItems: () => (dispatch(getItemsAction()))
})

const MapStateToProps = (rootState) => ({
    itemTypeArray: rootState.stocks.itemTypeArray,
    isLoading: rootState.stocks.isLoading,
    itemArray: rootState.stocks.itemsArray
})

export const StockFormComponent = connect(MapStateToProps, MapDispatchToProps)(StockForm)
