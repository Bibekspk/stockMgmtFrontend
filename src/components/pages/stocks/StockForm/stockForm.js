import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getItemTypeAction } from '../../../actions/stock.action';
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
            stockData: { ...addForm }

        }
    }

    componentDidMount = () => {
        this.props.getItemType();

    }

    componentDidUpdate = (prevProps) => { //checks if the prevProps and newProps are same, if not it runs
        let { itemType } = this.state
        if (prevProps.itemTypeArray !== this.props.itemTypeArray) {
            (this.props.itemTypeArray || []).map((item) => {
                let itemObject = {
                    value: item.itemType,
                    label: item.itemType
                }
                itemType.push(itemObject);
                this.setState({
                    'itemType': [...itemType] // spreading array to add new object individually 
                    //into the array
                })
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
                                <input className='form-control' type="text" name="itemName" id="itemName" onChange={this.handleChange} required></input>
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
    getItemType: () => (dispatch(getItemTypeAction()))
})

const MapStateToProps = (rootState) => ({
    itemTypeArray: rootState.stocks.itemTypeArray,
    isLoading: rootState.stocks.isLoading
})

export const StockFormComponent = connect(MapStateToProps, MapDispatchToProps)(StockForm)
