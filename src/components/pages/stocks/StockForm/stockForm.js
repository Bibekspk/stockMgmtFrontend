import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux';
import { getItemsAction, getItemTypeAction } from '../../../actions/stock.action';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { ReadOnlyRow } from './ReadOnlyRow';
import './stockForm.css'
import { EditableRow } from './EditableRow';
import { errorHandler, Toaster } from '../../../../utilities/errorHandler';

let addForm = {
    'id': "",
    'itemName': "",
    'quantity': "",
    'itemType': "",
    'price': "",
    'purchasedDate': ""
}

export class StockForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemType: [],
            items: [],
            stockData: { ...addForm },
            stockDataError: { ...addForm },
            purchaseArray: [],
            editItemId: '',
            selectedItem: "",
            selectedItemType: ""
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
            (this.props.itemArray || []).map((item, index) => {
                let itemObject = { // preparing array of item for select react bcoz it accepts objet with value and label 
                    value: item.itemName,
                    label: item.itemName,
                    id: index + 1
                }

                items.push(itemObject);
                this.setState((prevState) => ({
                    ...prevState,
                    items: [...items]
                }))
            })
        }
    }

    handleChange = (e) => { //handles adding item data and edit data of items
        let { name, value } = e.target;
        this.setState((prevState) => ({
            stockData: {
                ...prevState.stockData,
                [name]: value
            }
        }))
    }

    handleSelectItemType = (selectedOption) => { //selectedOPtion is from react select
        //it gets value and label of selected item
        this.setState((prevState) => ({
            stockData: {
                ...prevState.stockData,
                'itemType': selectedOption.value
            },
            selectedItemType: selectedOption
        }))
    }

    handleSelectItem = (selectedOption) => {
        this.setState((prevState) => ({
            stockData: {
                ...prevState.stockData,
                itemName: selectedOption.value,
                id: nanoid(7)
            },
            selectedItem: selectedOption // saving selectedOption value bcoz this value is seen in input field 
            // doing this for using reset button for reseting field
        }))
    }

    handleEditRow = (e, itemId) => { //saving editId in store so that i can use condition to display editable row for 
        // particular ID
        e.preventDefault();
        this.setState((prevState) => ({
            ...prevState,
            editItemId: itemId //setting item id to use conditional statement 
        }))
    }

    handleEditSave = (e, id) => { //saves edited info
        e.preventDefault();
        let { purchaseArray, stockData } = this.state;
        let index = purchaseArray.findIndex((item) => item.id === id);//finds index of id in purchase array to edit 
        purchaseArray[index] = stockData; // new stockdata is made in handeleChange and saved in array again
        this.setState({
            purchaseArray: [...purchaseArray],
            editItemId: "" // setting item id null so that readonly row appears 
        })
    }

    handleEditCancel = (e) => {
        e.preventDefault();
        this.setState({
            editItemId: '' //setting item id null so that readonly row appears
        })
    }

    handleAdd = (e) => { // adding item in an array to display in the table 
        e.preventDefault();
        let { stockData, purchaseArray } = this.state;
        if (!this.formValidate("add")) return Toaster("Please provide value in all fields !!")
        // checking if user adds item twice with same rate
        if (this.handleItemUnique()) return Toaster("Item already added !! ")
        purchaseArray.push(stockData);
        this.setState({
            purchaseArray: [...purchaseArray],
        })
    }

    handleItemUnique = () => { // checking if user adds item twice 
        let { stockData, purchaseArray } = this.state;
        let error = ""
        purchaseArray.length >= 1 && purchaseArray.map((item) => {
            if (item.itemName === stockData.itemName) //same item different rate 
                error = "true"
        })
        return error
    }

    formValidate = (type) => {
        let { stockData, stockDataError, purchaseArray} = this.state;
        if(type==="add"){
        stockDataError.itemName = stockData.itemName ? "" : "error";
        stockDataError.itemType = stockData.itemType ? "" : "error";
        stockDataError.price = stockData.price ? "" : "error";
        stockDataError.quantity = stockData.quantity ? "" : "error";

        this.setState({
            stockDataError
        })
        let errorArray = Object.values(stockDataError).filter((error) => error);
        if (errorArray.length === 0) return true
        else return false
        }
        if(type==="submit"){
            if(purchaseArray.length === 0) return false
            else return true 
        }    
    }

    handleDelete = (e, id) => {
        e.preventDefault();
        let { purchaseArray } = this.state;
        let index = purchaseArray.findIndex((item) => item.id === id);
        purchaseArray.splice(index, 1);
        this.setState({
            purchaseArray: [...purchaseArray]
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if (!this.formValidate("submit")) return Toaster("Please add items of the bill");
        this.props.SubmitData(this.state.purchaseArray)
        // this.setState({
        //     purchaseArray: [],
        //     stockData: {}
        // })
    }

    render() {
        let { purchaseArray, editItemId } = this.state;
        return (
            <div className='addStock me-3'>
                <h2 className='ms-2'>{this.props.mode}</h2>
                <form className='card ms-2 form-group px-3 py-3'>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-label'>Item Name</label>
                            <Select maxMenuHeight={150}
                                options={this.state.items}
                                onChange={this.handleSelectItem}
                                value={this.state.selectedItem}
                                isSearchable="true">
                            </Select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Item Type</label>
                            <Select maxMenuHeight={150}
                                options={this.state.itemType}
                                onChange={this.handleSelectItemType}
                                value={this.state.selectedItemType}
                                isSearchable="true">
                            </Select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label className='form-label'>Quantity</label>
                            <input className='form-control' type="number" name="quantity" id="quantity" onChange={this.handleChange} value={this.state.stockData.quantity}></input>
                        </div>
                        <div className='col-md-6'>
                            <label className='form-label'>Rate</label>
                            <input className='form-control' type="number" name="price" id="price" onChange={this.handleChange} value={this.state.stockData.price}></input>
                        </div>
                    </div>
                    <hr></hr>
                    <button type="button" className='btn btn-success' onClick={this.handleAdd} >Add Item</button>
                    <div className='tablediv container-fluid'>
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
                                    editItemId === item.id ?
                                        <EditableRow item={this.state.stockData} handleChange={this.handleChange} handleEditSave={this.handleEditSave} handleCancel={this.handleEditCancel} /> :
                                        <ReadOnlyRow item={item} index={index} handleEditRow={this.handleEditRow} handleDelete={this.handleDelete} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {
                        purchaseArray.length ?
                            <div className='row'>
                                <button className=' col ms-2 btn btn-success' onClick={this.handleSubmit}> Submit Data</button>
                                <div className='col'></div>
                                <div className='col'></div>
                            </div>: ""
                    }
                </form>
            </div>
        )
    }
}

const MapDispatchToProps = dispatch => ({
    getItemType: () => (dispatch(getItemTypeAction())),
    getItems: () => (dispatch(getItemsAction())),
})

const MapStateToProps = (rootState) => ({
    itemTypeArray: rootState.stocks.itemTypeArray,
    isLoading: rootState.stocks.isLoading,
    itemArray: rootState.stocks.itemsArray,
    isSuccess: rootState.stocks.isSuccess
})

export const StockFormComponent = connect(MapStateToProps, MapDispatchToProps)(StockForm)
