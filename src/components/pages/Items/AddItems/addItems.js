import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { HttpCLient } from '../../../../utilities/httpClient';

export class AddItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                ItemName: ''
            }
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            data: {
                [name]: value
            }
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.data.ItemName) return toast.info("Plese provide input!!")
        HttpCLient.POST('/stock/addItem', this.state.data, null, true)
            .then((response) => {
                console.log(response);
                toast.success(response.data.msg);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.msg)
            })

    }
    render() {
        return (
            <div className='me-3'>
                <h1>Add Item</h1>
                <div className='card ms-2 px-3 py-3'>
                    <form className='form-group' onSubmit={this.handleSubmit}>
                        <label className='form-label'>Item Name</label>
                        <input className='form-control' type="text" name='ItemName' id='ItemName' onChange={this.handleChange} placeholder='Item Name..' ></input>
                        <hr></hr>
                        <button className='btn btn-success' type="submit">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}
