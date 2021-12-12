import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './login.css'

export class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view : ""
        }
    }

    handlePassword=(e)=>{
        let {checked} = e.target; // checkbox ko value checked ma aaucha jun on/off huncha 

        if(checked){ // checkbox checked huda 
            this.setState((prevState)=>({
                ...prevState,
                view:true
            }))
        }
        if(!checked){ // checkbox unchecked huda 
            this.setState((prevState)=>({
                ...prevState,
                view:false
            }))
        }
    }

    handleChange=()=>{
    }

    render() {

        return (
            <div className="row login">
                <div className="col-md-1"></div>
                <img className="col-md-6 col-sm-12 col-xs-12" alt="landing" src="/landing.png"></img>
                <Card className="col-md-4 mt-3">
                    <h2 className="text-center mt-2">LETS GET IN</h2><br />
                    <form className="form-group mt-3">
                        <i className="fas fa-user" style={{ marginLeft: "17px", fontSize: "27px" }}></i>
                        <input className=" text-center" type="text" placeholder="Username" /><br /><br />
                        <i class="fas fa-lock" style={{ marginLeft: "17px", fontSize: "27px" }}></i>
                        <input className=" text-center" type={this.state.view ? "text" : "password"} placeholder="Password" /><br /><br/>
                            <input type="checkbox" name="showPassword" id="showPassword" onChange={this.handlePassword}/><label htmlFor="showPassword">&nbsp;&nbsp;Show Password</label>
                            <a style={{float:'right',textDecoration:'none',color:'black'}} href="/forgot-password">Forgot Password ?</a><br/><br/>
                            <button className="btn btn-md btn-primary">Log In</button>
                    </form>
                </Card>
                <div className="col-md-1"></div>

            </div>
        )
    }
}