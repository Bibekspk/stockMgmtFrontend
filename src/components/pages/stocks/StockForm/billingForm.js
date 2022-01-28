import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

let formdata = {
    billno : "",
    purchaseDate : ""
}

export class BillingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: "",
            data: {...formdata},
        }
    }

    componentDidMount = () => {
        this.setState({
            show: this.props.show
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleChange=(e)=>{
        let { name, value } = e.target;
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.data.billno && this.state.data.purchaseDate) {
            this.handleClose();
            this.props.parentCallBack(this.state.data) //passing data to parent coponent using fucntion 
        }
    }

    handleCancel = () => {
        this.handleClose()
        this.props.parentCallBack(false) //passing data to parent coponent using fucntion 

    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <h4>Please provide date of purchase and bill number before submitting</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form-group' onSubmit={this.handleSubmit}>
                            <label className='form-label'>Bill Number</label>
                            <input className='form-control' type="text" name="billno" required={true} onChange={this.handleChange} /><br/>
                            <label className='form-label'>Date of Purchase</label>
                            <input className='form-control' type="date" name="purchaseDate" required={true} onChange={this.handleChange} />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        
                            <button className=" btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            <button className=" btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
