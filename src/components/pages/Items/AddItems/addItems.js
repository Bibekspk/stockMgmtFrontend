import React, { Component } from 'react';
import { HttpCLient } from '../../../../utilities/httpClient';

export class AddItems extends Component {
    constructor(props){
        super(props);

        this.state={
            ItemName: ''
        }
    }
    handleChange=(e)=>{
        let {name,value} = this.state;
        this.setState({
            [name]: value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        HttpCLient.POST('/stock/addItem',this.state,null,true)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        
    }
    render() {
        return (
            <div className='me-3'>
                <h1>Add Item</h1>
                <div className='card ms-2 px-3 py-3'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <label className='form-label'>Item Name</label>
                    <input className='form-control' type="text" name='ItemName' id='ItemName' onChange={this.handleChange} placeholder='Item Name..'></input>
                    <hr></hr>
                    <button className='btn btn-success' type="submit">Add Item</button>
                </form>
                </div>
            </div>
        )
    }
}
