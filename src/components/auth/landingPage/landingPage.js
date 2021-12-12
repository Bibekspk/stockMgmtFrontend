import React from 'react';
import './landingpage.css';
import { Card } from 'react-bootstrap';

export const LandingPage = () => {
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <img className="col-md-6 col-sm-12 col-xs-12" alt="landing" src="/landing.png"></img>
               <Card className=" landingCard text-center col-md-4 mt-4">
                    <h1 className="text-center">Stock Management System</h1><br/>
                    <h3 className="text-center">Get Started !</h3>
                    <br/>
                    <button className="btn btn-lg btn-primary">LOGIN</button><br/>
               </Card>
            <div className="col-md-1"></div>

        </div>
    )
}
