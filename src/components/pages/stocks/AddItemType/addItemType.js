import React, { Component } from 'react';
import {Plus} from 'react-bootstrap-icons'
import { toast } from 'react-toastify';
import { HttpCLient } from '../../../../utilities/httpClient';

export class AddItemType extends Component {
    constructor(props){
        super(props);
        this.state={
            itemType:""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.itemType) return toast.info("Please provide input!!")
        HttpCLient.POST('/stock/addItemType',this.state,null,true)
            .then(data=>{
                toast.success("Item Type Added Successfully")
            })            
            .catch((error)=>{
                toast.error(error.response.data.msg);
            })
    }

    handleChange=(e)=>{
        let {name,value}= e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className='addItemType me-3'>
                <h2>Add Item Type</h2>
                <form className='card ms-2 form-group px-3 py-3' onSubmit={this.handleSubmit}>
                    <label htmlFor='itemType' className='form-label'>Item Type</label>
                    <input type="text" className='form-control' onChange={this.handleChange} name="itemType" id="itemType" placeholder="Item Type.." value={this.state.itemType} required></input>
                    <hr></hr>
                    <button type='submit' className='btn btn-success'><Plus color='white' size='25px'></Plus>Add</button>
                </form>
            </div>
        )
    }
}
